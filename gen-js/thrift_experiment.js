// Generated by CoffeeScript 1.3.3
(function() {
  var casper, client, protocol, transport;

  casper = require('casper').create();

  this.phantom.injectJs('/home/ks/Dropbox/inp/thr2/gen-js/js/thrift.js');

  this.phantom.injectJs('/home/ks/Dropbox/inp/thr2/ask/gen-js/MathService.js');

  transport = this.Thrift.Transport('localhost:9900');

  protocol = this.Thrift.Protocol(transport);

  client = this.MathServiceClient(protocol);

  console.log(client.add(1, 2));

}).call(this);