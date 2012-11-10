//
// Autogenerated by Thrift Compiler (0.9.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

MathService_add_args = function(args) {
  this.a = null;
  this.y = null;
  if (args) {
    if (args.a !== undefined) {
      this.a = args.a;
    }
    if (args.y !== undefined) {
      this.y = args.y;
    }
  }
};
MathService_add_args.prototype = {};
MathService_add_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I64) {
        this.a = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.y = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MathService_add_args.prototype.write = function(output) {
  output.writeStructBegin('MathService_add_args');
  if (this.a !== null && this.a !== undefined) {
    output.writeFieldBegin('a', Thrift.Type.I64, 1);
    output.writeI64(this.a);
    output.writeFieldEnd();
  }
  if (this.y !== null && this.y !== undefined) {
    output.writeFieldBegin('y', Thrift.Type.I64, 2);
    output.writeI64(this.y);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MathService_add_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
MathService_add_result.prototype = {};
MathService_add_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.I64) {
        this.success = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MathService_add_result.prototype.write = function(output) {
  output.writeStructBegin('MathService_add_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I64, 0);
    output.writeI64(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MathServiceClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
MathServiceClient.prototype = {};
MathServiceClient.prototype.add = function(a, y) {
  this.send_add(a, y);
  return this.recv_add();
};

MathServiceClient.prototype.send_add = function(a, y) {
  this.output.writeMessageBegin('add', Thrift.MessageType.CALL, this.seqid);
  var args = new MathService_add_args();
  args.a = a;
  args.y = y;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

MathServiceClient.prototype.recv_add = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new MathService_add_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'add failed: unknown result';
};
