import socket

UDP_IP_ADDRESS = "10.22.16.182"
UDP_PORT_NO = 1025
clientSock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)


message = open('/Users/fabiancooper/Downloads/WebServerContent/index.html', 'r')

clientSock.sendto(message, (UDP_IP_ADDRESS, UDP_PORT_NO))
html