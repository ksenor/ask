#!/usr/bin/env python

from thrift.transport import TSocket
from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol
from thrift.server import TServer

import demo.MathService

class MathHandler(demo.MathService.Iface):
    def add(self, a, b):
        return a + b

if __name__ == '__main__':
    processor = demo.MathService.Processor(MathHandler())
    transport = TSocket.TServerSocket(port=9900)
    tfactory = TTransport.TBufferedTransportFactory()
    pfactory = TBinaryProtocol.TBinaryProtocolFactory()

    server = TServer.TThreadedServer(processor, transport, tfactory, pfactory)

    print 'Starting the server...'
    server.serve()
    print 'done.'
