/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/b4a";
exports.ids = ["vendor-chunks/b4a"];
exports.modules = {

/***/ "(rsc)/../node_modules/b4a/index.js":
/*!************************************!*\
  !*** ../node_modules/b4a/index.js ***!
  \************************************/
/***/ ((module) => {

eval("function isBuffer (value) {\n  return Buffer.isBuffer(value) || value instanceof Uint8Array\n}\n\nfunction isEncoding (encoding) {\n  return Buffer.isEncoding(encoding)\n}\n\nfunction alloc (size, fill, encoding) {\n  return Buffer.alloc(size, fill, encoding)\n}\n\nfunction allocUnsafe (size) {\n  return Buffer.allocUnsafe(size)\n}\n\nfunction allocUnsafeSlow (size) {\n  return Buffer.allocUnsafeSlow(size)\n}\n\nfunction byteLength (string, encoding) {\n  return Buffer.byteLength(string, encoding)\n}\n\nfunction compare (a, b) {\n  return Buffer.compare(a, b)\n}\n\nfunction concat (buffers, totalLength) {\n  return Buffer.concat(buffers, totalLength)\n}\n\nfunction copy (source, target, targetStart, start, end) {\n  return toBuffer(source).copy(target, targetStart, start, end)\n}\n\nfunction equals (a, b) {\n  return toBuffer(a).equals(b)\n}\n\nfunction fill (buffer, value, offset, end, encoding) {\n  return toBuffer(buffer).fill(value, offset, end, encoding)\n}\n\nfunction from (value, encodingOrOffset, length) {\n  return Buffer.from(value, encodingOrOffset, length)\n}\n\nfunction includes (buffer, value, byteOffset, encoding) {\n  return toBuffer(buffer).includes(value, byteOffset, encoding)\n}\n\nfunction indexOf (buffer, value, byfeOffset, encoding) {\n  return toBuffer(buffer).indexOf(value, byfeOffset, encoding)\n}\n\nfunction lastIndexOf (buffer, value, byteOffset, encoding) {\n  return toBuffer(buffer).lastIndexOf(value, byteOffset, encoding)\n}\n\nfunction swap16 (buffer) {\n  return toBuffer(buffer).swap16()\n}\n\nfunction swap32 (buffer) {\n  return toBuffer(buffer).swap32()\n}\n\nfunction swap64 (buffer) {\n  return toBuffer(buffer).swap64()\n}\n\nfunction toBuffer (buffer) {\n  if (Buffer.isBuffer(buffer)) return buffer\n  return Buffer.from(buffer.buffer, buffer.byteOffset, buffer.byteLength)\n}\n\nfunction toString (buffer, encoding, start, end) {\n  return toBuffer(buffer).toString(encoding, start, end)\n}\n\nfunction write (buffer, string, offset, length, encoding) {\n  return toBuffer(buffer).write(string, offset, length, encoding)\n}\n\nfunction writeDoubleLE (buffer, value, offset) {\n  return toBuffer(buffer).writeDoubleLE(value, offset)\n}\n\nfunction writeFloatLE (buffer, value, offset) {\n  return toBuffer(buffer).writeFloatLE(value, offset)\n}\n\nfunction writeUInt32LE (buffer, value, offset) {\n  return toBuffer(buffer).writeUInt32LE(value, offset)\n}\n\nfunction writeInt32LE (buffer, value, offset) {\n  return toBuffer(buffer).writeInt32LE(value, offset)\n}\n\nfunction readDoubleLE (buffer, offset) {\n  return toBuffer(buffer).readDoubleLE(offset)\n}\n\nfunction readFloatLE (buffer, offset) {\n  return toBuffer(buffer).readFloatLE(offset)\n}\n\nfunction readUInt32LE (buffer, offset) {\n  return toBuffer(buffer).readUInt32LE(offset)\n}\n\nfunction readInt32LE (buffer, offset) {\n  return toBuffer(buffer).readInt32LE(offset)\n}\n\nfunction writeDoubleBE (buffer, value, offset) {\n  return toBuffer(buffer).writeDoubleBE(value, offset)\n}\n\nfunction writeFloatBE (buffer, value, offset) {\n  return toBuffer(buffer).writeFloatBE(value, offset)\n}\n\nfunction writeUInt32BE (buffer, value, offset) {\n  return toBuffer(buffer).writeUInt32BE(value, offset)\n}\n\nfunction writeInt32BE (buffer, value, offset) {\n  return toBuffer(buffer).writeInt32BE(value, offset)\n}\n\nfunction readDoubleBE (buffer, offset) {\n  return toBuffer(buffer).readDoubleBE(offset)\n}\n\nfunction readFloatBE (buffer, offset) {\n  return toBuffer(buffer).readFloatBE(offset)\n}\n\nfunction readUInt32BE (buffer, offset) {\n  return toBuffer(buffer).readUInt32BE(offset)\n}\n\nfunction readInt32BE (buffer, offset) {\n  return toBuffer(buffer).readInt32BE(offset)\n}\n\nmodule.exports = {\n  isBuffer,\n  isEncoding,\n  alloc,\n  allocUnsafe,\n  allocUnsafeSlow,\n  byteLength,\n  compare,\n  concat,\n  copy,\n  equals,\n  fill,\n  from,\n  includes,\n  indexOf,\n  lastIndexOf,\n  swap16,\n  swap32,\n  swap64,\n  toBuffer,\n  toString,\n  write,\n  writeDoubleLE,\n  writeFloatLE,\n  writeUInt32LE,\n  writeInt32LE,\n  readDoubleLE,\n  readFloatLE,\n  readUInt32LE,\n  readInt32LE,\n  writeDoubleBE,\n  writeFloatBE,\n  writeUInt32BE,\n  writeInt32BE,\n  readDoubleBE,\n  readFloatBE,\n  readUInt32BE,\n  readInt32BE\n\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL2I0YS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyIvVXNlcnMvemVsYWxlbW1la29ubmVuL0Rlc2t0b3AvUGl4ZWxQZWFrL3Byb2plY3RzL2xhYmVsLWNyZWF0aW5nLWFwcC9sYWJlbC1jcmVhdGluZy1hcHAvbm9kZV9tb2R1bGVzL2I0YS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpc0J1ZmZlciAodmFsdWUpIHtcbiAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcih2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5XG59XG5cbmZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHJldHVybiBCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZylcbn1cblxuZnVuY3Rpb24gYWxsb2MgKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIHJldHVybiBCdWZmZXIuYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlIChzaXplKSB7XG4gIHJldHVybiBCdWZmZXIuYWxsb2NVbnNhZmUoc2l6ZSlcbn1cblxuZnVuY3Rpb24gYWxsb2NVbnNhZmVTbG93IChzaXplKSB7XG4gIHJldHVybiBCdWZmZXIuYWxsb2NVbnNhZmVTbG93KHNpemUpXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIEJ1ZmZlci5ieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKGEsIGIpXG59XG5cbmZ1bmN0aW9uIGNvbmNhdCAoYnVmZmVycywgdG90YWxMZW5ndGgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoYnVmZmVycywgdG90YWxMZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGNvcHkgKHNvdXJjZSwgdGFyZ2V0LCB0YXJnZXRTdGFydCwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gdG9CdWZmZXIoc291cmNlKS5jb3B5KHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIGVxdWFscyAoYSwgYikge1xuICByZXR1cm4gdG9CdWZmZXIoYSkuZXF1YWxzKGIpXG59XG5cbmZ1bmN0aW9uIGZpbGwgKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgZW5kLCBlbmNvZGluZykge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS5maWxsKHZhbHVlLCBvZmZzZXQsIGVuZCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGZyb20gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGluY2x1ZGVzIChidWZmZXIsIHZhbHVlLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS5pbmNsdWRlcyh2YWx1ZSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGluZGV4T2YgKGJ1ZmZlciwgdmFsdWUsIGJ5ZmVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0b0J1ZmZlcihidWZmZXIpLmluZGV4T2YodmFsdWUsIGJ5ZmVPZmZzZXQsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBsYXN0SW5kZXhPZiAoYnVmZmVyLCB2YWx1ZSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRvQnVmZmVyKGJ1ZmZlcikubGFzdEluZGV4T2YodmFsdWUsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBzd2FwMTYgKGJ1ZmZlcikge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS5zd2FwMTYoKVxufVxuXG5mdW5jdGlvbiBzd2FwMzIgKGJ1ZmZlcikge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS5zd2FwMzIoKVxufVxuXG5mdW5jdGlvbiBzd2FwNjQgKGJ1ZmZlcikge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS5zd2FwNjQoKVxufVxuXG5mdW5jdGlvbiB0b0J1ZmZlciAoYnVmZmVyKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoYnVmZmVyKSkgcmV0dXJuIGJ1ZmZlclxuICByZXR1cm4gQnVmZmVyLmZyb20oYnVmZmVyLmJ1ZmZlciwgYnVmZmVyLmJ5dGVPZmZzZXQsIGJ1ZmZlci5ieXRlTGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB0b1N0cmluZyAoYnVmZmVyLCBlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS50b1N0cmluZyhlbmNvZGluZywgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gd3JpdGUgKGJ1ZmZlciwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRvQnVmZmVyKGJ1ZmZlcikud3JpdGUoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlTEUgKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCkge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS53cml0ZURvdWJsZUxFKHZhbHVlLCBvZmZzZXQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0KSB7XG4gIHJldHVybiB0b0J1ZmZlcihidWZmZXIpLndyaXRlRmxvYXRMRSh2YWx1ZSwgb2Zmc2V0KVxufVxuXG5mdW5jdGlvbiB3cml0ZVVJbnQzMkxFIChidWZmZXIsIHZhbHVlLCBvZmZzZXQpIHtcbiAgcmV0dXJuIHRvQnVmZmVyKGJ1ZmZlcikud3JpdGVVSW50MzJMRSh2YWx1ZSwgb2Zmc2V0KVxufVxuXG5mdW5jdGlvbiB3cml0ZUludDMyTEUgKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCkge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS53cml0ZUludDMyTEUodmFsdWUsIG9mZnNldClcbn1cblxuZnVuY3Rpb24gcmVhZERvdWJsZUxFIChidWZmZXIsIG9mZnNldCkge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS5yZWFkRG91YmxlTEUob2Zmc2V0KVxufVxuXG5mdW5jdGlvbiByZWFkRmxvYXRMRSAoYnVmZmVyLCBvZmZzZXQpIHtcbiAgcmV0dXJuIHRvQnVmZmVyKGJ1ZmZlcikucmVhZEZsb2F0TEUob2Zmc2V0KVxufVxuXG5mdW5jdGlvbiByZWFkVUludDMyTEUgKGJ1ZmZlciwgb2Zmc2V0KSB7XG4gIHJldHVybiB0b0J1ZmZlcihidWZmZXIpLnJlYWRVSW50MzJMRShvZmZzZXQpXG59XG5cbmZ1bmN0aW9uIHJlYWRJbnQzMkxFIChidWZmZXIsIG9mZnNldCkge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS5yZWFkSW50MzJMRShvZmZzZXQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCkge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS53cml0ZURvdWJsZUJFKHZhbHVlLCBvZmZzZXQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0KSB7XG4gIHJldHVybiB0b0J1ZmZlcihidWZmZXIpLndyaXRlRmxvYXRCRSh2YWx1ZSwgb2Zmc2V0KVxufVxuXG5mdW5jdGlvbiB3cml0ZVVJbnQzMkJFIChidWZmZXIsIHZhbHVlLCBvZmZzZXQpIHtcbiAgcmV0dXJuIHRvQnVmZmVyKGJ1ZmZlcikud3JpdGVVSW50MzJCRSh2YWx1ZSwgb2Zmc2V0KVxufVxuXG5mdW5jdGlvbiB3cml0ZUludDMyQkUgKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCkge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS53cml0ZUludDMyQkUodmFsdWUsIG9mZnNldClcbn1cblxuZnVuY3Rpb24gcmVhZERvdWJsZUJFIChidWZmZXIsIG9mZnNldCkge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS5yZWFkRG91YmxlQkUob2Zmc2V0KVxufVxuXG5mdW5jdGlvbiByZWFkRmxvYXRCRSAoYnVmZmVyLCBvZmZzZXQpIHtcbiAgcmV0dXJuIHRvQnVmZmVyKGJ1ZmZlcikucmVhZEZsb2F0QkUob2Zmc2V0KVxufVxuXG5mdW5jdGlvbiByZWFkVUludDMyQkUgKGJ1ZmZlciwgb2Zmc2V0KSB7XG4gIHJldHVybiB0b0J1ZmZlcihidWZmZXIpLnJlYWRVSW50MzJCRShvZmZzZXQpXG59XG5cbmZ1bmN0aW9uIHJlYWRJbnQzMkJFIChidWZmZXIsIG9mZnNldCkge1xuICByZXR1cm4gdG9CdWZmZXIoYnVmZmVyKS5yZWFkSW50MzJCRShvZmZzZXQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0J1ZmZlcixcbiAgaXNFbmNvZGluZyxcbiAgYWxsb2MsXG4gIGFsbG9jVW5zYWZlLFxuICBhbGxvY1Vuc2FmZVNsb3csXG4gIGJ5dGVMZW5ndGgsXG4gIGNvbXBhcmUsXG4gIGNvbmNhdCxcbiAgY29weSxcbiAgZXF1YWxzLFxuICBmaWxsLFxuICBmcm9tLFxuICBpbmNsdWRlcyxcbiAgaW5kZXhPZixcbiAgbGFzdEluZGV4T2YsXG4gIHN3YXAxNixcbiAgc3dhcDMyLFxuICBzd2FwNjQsXG4gIHRvQnVmZmVyLFxuICB0b1N0cmluZyxcbiAgd3JpdGUsXG4gIHdyaXRlRG91YmxlTEUsXG4gIHdyaXRlRmxvYXRMRSxcbiAgd3JpdGVVSW50MzJMRSxcbiAgd3JpdGVJbnQzMkxFLFxuICByZWFkRG91YmxlTEUsXG4gIHJlYWRGbG9hdExFLFxuICByZWFkVUludDMyTEUsXG4gIHJlYWRJbnQzMkxFLFxuICB3cml0ZURvdWJsZUJFLFxuICB3cml0ZUZsb2F0QkUsXG4gIHdyaXRlVUludDMyQkUsXG4gIHdyaXRlSW50MzJCRSxcbiAgcmVhZERvdWJsZUJFLFxuICByZWFkRmxvYXRCRSxcbiAgcmVhZFVJbnQzMkJFLFxuICByZWFkSW50MzJCRVxuXG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/b4a/index.js\n");

/***/ })

};
;