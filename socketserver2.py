import socket

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

lhostname = socket.gethostname()

ip_address = socket.gethostbyname(lhostname)

server_address = (ip_address, 23456)  
print ('Working with server address' % server_address)  
sock.bind(server_address)

sock.listen(1)

while True:  
    print ('waiting for a connection')
    connection, client_address = sock.accept()

    try:
        # show who connected to us
        print ('Ready to serve...')
        print ('connection from', client_address)

        # receive the data in small chunks and print it
        while True:
            data = connection.recv(64)
            if data:
                # output received data
                print ("Data: %s" % data)
            else:
                # no more data -- quit the loop
                print ("no more data.")
                break
    finally:
        # Clean up the connection
        connection.close()