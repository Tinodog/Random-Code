import socket


address = "127.0.0.1"
port = 1025

serverSock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

serverSock.bind((address, port))
serverSock.listen(1)

while True:
	print ('Ready...')
	connectionSocket, addr = serverSock.accept()

	try:
		message = connectionSocket.recv(1024)
		if not message:
			break
		filename = message.split()[1]
		filename = '/Users/fabiancooper/Desktop/Computer Networking/WebServerContent/'+filename[1:]
		print(filename)
		f = open(filename)
		outputdata = f.read(1024)
		
		header = 'HTTP/1.1 200 OK\n\n'
		connectionSocket.send(header.encode())
		while(outputdata):
			connectionSocket.send(outputdata)
			outputdata = f.read(1024)
		f.close()
			
	except IOError:
		errResponse = ('HTTP/1.1 404 Not Found\n')
		connectionSocket.send(errResponse.encode())


	connectionSocket.close()
serverSock.close()