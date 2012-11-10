casper = require('casper').create()

@phantom.injectJs('/home/ks/Dropbox/inp/thr2/gen-js/js/thrift.js')
@phantom.injectJs('/home/ks/Dropbox/inp/thr2/ask/gen-js/MathService.js')

transport = @Thrift.Transport('localhost:9900')
protocol = @Thrift.Protocol(transport)
client = @MathServiceClient(protocol)

console.log client.add(1,2)