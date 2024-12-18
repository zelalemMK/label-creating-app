/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/zip-stream";
exports.ids = ["vendor-chunks/zip-stream"];
exports.modules = {

/***/ "(rsc)/../node_modules/zip-stream/index.js":
/*!*******************************************!*\
  !*** ../node_modules/zip-stream/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * ZipStream\n *\n * @ignore\n * @license [MIT]{@link https://github.com/archiverjs/node-zip-stream/blob/master/LICENSE}\n * @copyright (c) 2014 Chris Talkington, contributors.\n */\nvar inherits = (__webpack_require__(/*! util */ \"util\").inherits);\n\nvar ZipArchiveOutputStream = (__webpack_require__(/*! compress-commons */ \"(rsc)/../node_modules/compress-commons/lib/compress-commons.js\").ZipArchiveOutputStream);\nvar ZipArchiveEntry = (__webpack_require__(/*! compress-commons */ \"(rsc)/../node_modules/compress-commons/lib/compress-commons.js\").ZipArchiveEntry);\n\nvar util = __webpack_require__(/*! archiver-utils */ \"(rsc)/../node_modules/archiver-utils/index.js\");\n\n/**\n * @constructor\n * @extends external:ZipArchiveOutputStream\n * @param {Object} [options]\n * @param {String} [options.comment] Sets the zip archive comment.\n * @param {Boolean} [options.forceLocalTime=false] Forces the archive to contain local file times instead of UTC.\n * @param {Boolean} [options.forceZip64=false] Forces the archive to contain ZIP64 headers.\n * @param {Boolean} [options.store=false] Sets the compression method to STORE.\n * @param {Object} [options.zlib] Passed to [zlib]{@link https://nodejs.org/api/zlib.html#zlib_class_options}\n * to control compression.\n */\nvar ZipStream = module.exports = function(options) {\n  if (!(this instanceof ZipStream)) {\n    return new ZipStream(options);\n  }\n\n  options = this.options = options || {};\n  options.zlib = options.zlib || {};\n\n  ZipArchiveOutputStream.call(this, options);\n\n  if (typeof options.level === 'number' && options.level >= 0) {\n    options.zlib.level = options.level;\n    delete options.level;\n  }\n\n  if (!options.forceZip64 && typeof options.zlib.level === 'number' && options.zlib.level === 0) {\n    options.store = true;\n  }\n\n  options.namePrependSlash = options.namePrependSlash || false;\n\n  if (options.comment && options.comment.length > 0) {\n    this.setComment(options.comment);\n  }\n};\n\ninherits(ZipStream, ZipArchiveOutputStream);\n\n/**\n * Normalizes entry data with fallbacks for key properties.\n *\n * @private\n * @param  {Object} data\n * @return {Object}\n */\nZipStream.prototype._normalizeFileData = function(data) {\n  data = util.defaults(data, {\n    type: 'file',\n    name: null,\n    namePrependSlash: this.options.namePrependSlash,\n    linkname: null,\n    date: null,\n    mode: null,\n    store: this.options.store,\n    comment: ''\n  });\n\n  var isDir = data.type === 'directory';\n  var isSymlink = data.type === 'symlink';\n\n  if (data.name) {\n    data.name = util.sanitizePath(data.name);\n\n    if (!isSymlink && data.name.slice(-1) === '/') {\n      isDir = true;\n      data.type = 'directory';\n    } else if (isDir) {\n      data.name += '/';\n    }\n  }\n\n  if (isDir || isSymlink) {\n    data.store = true;\n  }\n\n  data.date = util.dateify(data.date);\n\n  return data;\n};\n\n/**\n * Appends an entry given an input source (text string, buffer, or stream).\n *\n * @param  {(Buffer|Stream|String)} source The input source.\n * @param  {Object} data\n * @param  {String} data.name Sets the entry name including internal path.\n * @param  {String} [data.comment] Sets the entry comment.\n * @param  {(String|Date)} [data.date=NOW()] Sets the entry date.\n * @param  {Number} [data.mode=D:0755/F:0644] Sets the entry permissions.\n * @param  {Boolean} [data.store=options.store] Sets the compression method to STORE.\n * @param  {String} [data.type=file] Sets the entry type. Defaults to `directory`\n * if name ends with trailing slash.\n * @param  {Function} callback\n * @return this\n */\nZipStream.prototype.entry = function(source, data, callback) {\n  if (typeof callback !== 'function') {\n    callback = this._emitErrorCallback.bind(this);\n  }\n\n  data = this._normalizeFileData(data);\n\n  if (data.type !== 'file' && data.type !== 'directory' && data.type !== 'symlink') {\n    callback(new Error(data.type + ' entries not currently supported'));\n    return;\n  }\n\n  if (typeof data.name !== 'string' || data.name.length === 0) {\n    callback(new Error('entry name must be a non-empty string value'));\n    return;\n  }\n\n  if (data.type === 'symlink' && typeof data.linkname !== 'string') {\n    callback(new Error('entry linkname must be a non-empty string value when type equals symlink'));\n    return;\n  }\n\n  var entry = new ZipArchiveEntry(data.name);\n  entry.setTime(data.date, this.options.forceLocalTime);\n\n  if (data.namePrependSlash) {\n    entry.setName(data.name, true);\n  }\n\n  if (data.store) {\n    entry.setMethod(0);\n  }\n\n  if (data.comment.length > 0) {\n    entry.setComment(data.comment);\n  }\n\n  if (data.type === 'symlink' && typeof data.mode !== 'number') {\n    data.mode = 40960; // 0120000\n  }\n\n  if (typeof data.mode === 'number') {\n    if (data.type === 'symlink') {\n      data.mode |= 40960;\n    }\n\n    entry.setUnixMode(data.mode);\n  }\n\n  if (data.type === 'symlink' && typeof data.linkname === 'string') {\n    source = Buffer.from(data.linkname);\n  }\n\n  return ZipArchiveOutputStream.prototype.entry.call(this, entry, source, callback);\n};\n\n/**\n * Finalizes the instance and prevents further appending to the archive\n * structure (queue will continue til drained).\n *\n * @return void\n */\nZipStream.prototype.finalize = function() {\n  this.finish();\n};\n\n/**\n * Returns the current number of bytes written to this stream.\n * @function ZipStream#getBytesWritten\n * @returns {Number}\n */\n\n/**\n * Compress Commons ZipArchiveOutputStream\n * @external ZipArchiveOutputStream\n * @see {@link https://github.com/archiverjs/node-compress-commons}\n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL3ppcC1zdHJlYW0vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGVBQWUsa0RBQXdCOztBQUV2Qyw2QkFBNkIsc0lBQWtEO0FBQy9FLHNCQUFzQiwrSEFBMkM7O0FBRWpFLFdBQVcsbUJBQU8sQ0FBQyxxRUFBZ0I7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxRQUFRLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0JBQXdCO0FBQ3BDLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksZUFBZTtBQUMzQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxTQUFTO0FBQ3JCLFlBQVksUUFBUTtBQUNwQjtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUIiwic291cmNlcyI6WyIvVXNlcnMvemVsYWxlbW1la29ubmVuL0Rlc2t0b3AvUGl4ZWxQZWFrL3Byb2plY3RzL2xhYmVsLWNyZWF0aW5nLWFwcC9sYWJlbC1jcmVhdGluZy1hcHAvbm9kZV9tb2R1bGVzL3ppcC1zdHJlYW0vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBaaXBTdHJlYW1cbiAqXG4gKiBAaWdub3JlXG4gKiBAbGljZW5zZSBbTUlUXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vYXJjaGl2ZXJqcy9ub2RlLXppcC1zdHJlYW0vYmxvYi9tYXN0ZXIvTElDRU5TRX1cbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTQgQ2hyaXMgVGFsa2luZ3RvbiwgY29udHJpYnV0b3JzLlxuICovXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCd1dGlsJykuaW5oZXJpdHM7XG5cbnZhciBaaXBBcmNoaXZlT3V0cHV0U3RyZWFtID0gcmVxdWlyZSgnY29tcHJlc3MtY29tbW9ucycpLlppcEFyY2hpdmVPdXRwdXRTdHJlYW07XG52YXIgWmlwQXJjaGl2ZUVudHJ5ID0gcmVxdWlyZSgnY29tcHJlc3MtY29tbW9ucycpLlppcEFyY2hpdmVFbnRyeTtcblxudmFyIHV0aWwgPSByZXF1aXJlKCdhcmNoaXZlci11dGlscycpO1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICogQGV4dGVuZHMgZXh0ZXJuYWw6WmlwQXJjaGl2ZU91dHB1dFN0cmVhbVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLmNvbW1lbnRdIFNldHMgdGhlIHppcCBhcmNoaXZlIGNvbW1lbnQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmZvcmNlTG9jYWxUaW1lPWZhbHNlXSBGb3JjZXMgdGhlIGFyY2hpdmUgdG8gY29udGFpbiBsb2NhbCBmaWxlIHRpbWVzIGluc3RlYWQgb2YgVVRDLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5mb3JjZVppcDY0PWZhbHNlXSBGb3JjZXMgdGhlIGFyY2hpdmUgdG8gY29udGFpbiBaSVA2NCBoZWFkZXJzLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5zdG9yZT1mYWxzZV0gU2V0cyB0aGUgY29tcHJlc3Npb24gbWV0aG9kIHRvIFNUT1JFLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnpsaWJdIFBhc3NlZCB0byBbemxpYl17QGxpbmsgaHR0cHM6Ly9ub2RlanMub3JnL2FwaS96bGliLmh0bWwjemxpYl9jbGFzc19vcHRpb25zfVxuICogdG8gY29udHJvbCBjb21wcmVzc2lvbi5cbiAqL1xudmFyIFppcFN0cmVhbSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgWmlwU3RyZWFtKSkge1xuICAgIHJldHVybiBuZXcgWmlwU3RyZWFtKG9wdGlvbnMpO1xuICB9XG5cbiAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuemxpYiA9IG9wdGlvbnMuemxpYiB8fCB7fTtcblxuICBaaXBBcmNoaXZlT3V0cHV0U3RyZWFtLmNhbGwodGhpcywgb3B0aW9ucyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmxldmVsID09PSAnbnVtYmVyJyAmJiBvcHRpb25zLmxldmVsID49IDApIHtcbiAgICBvcHRpb25zLnpsaWIubGV2ZWwgPSBvcHRpb25zLmxldmVsO1xuICAgIGRlbGV0ZSBvcHRpb25zLmxldmVsO1xuICB9XG5cbiAgaWYgKCFvcHRpb25zLmZvcmNlWmlwNjQgJiYgdHlwZW9mIG9wdGlvbnMuemxpYi5sZXZlbCA9PT0gJ251bWJlcicgJiYgb3B0aW9ucy56bGliLmxldmVsID09PSAwKSB7XG4gICAgb3B0aW9ucy5zdG9yZSA9IHRydWU7XG4gIH1cblxuICBvcHRpb25zLm5hbWVQcmVwZW5kU2xhc2ggPSBvcHRpb25zLm5hbWVQcmVwZW5kU2xhc2ggfHwgZmFsc2U7XG5cbiAgaWYgKG9wdGlvbnMuY29tbWVudCAmJiBvcHRpb25zLmNvbW1lbnQubGVuZ3RoID4gMCkge1xuICAgIHRoaXMuc2V0Q29tbWVudChvcHRpb25zLmNvbW1lbnQpO1xuICB9XG59O1xuXG5pbmhlcml0cyhaaXBTdHJlYW0sIFppcEFyY2hpdmVPdXRwdXRTdHJlYW0pO1xuXG4vKipcbiAqIE5vcm1hbGl6ZXMgZW50cnkgZGF0YSB3aXRoIGZhbGxiYWNrcyBmb3Iga2V5IHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAge09iamVjdH0gZGF0YVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5aaXBTdHJlYW0ucHJvdG90eXBlLl9ub3JtYWxpemVGaWxlRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgZGF0YSA9IHV0aWwuZGVmYXVsdHMoZGF0YSwge1xuICAgIHR5cGU6ICdmaWxlJyxcbiAgICBuYW1lOiBudWxsLFxuICAgIG5hbWVQcmVwZW5kU2xhc2g6IHRoaXMub3B0aW9ucy5uYW1lUHJlcGVuZFNsYXNoLFxuICAgIGxpbmtuYW1lOiBudWxsLFxuICAgIGRhdGU6IG51bGwsXG4gICAgbW9kZTogbnVsbCxcbiAgICBzdG9yZTogdGhpcy5vcHRpb25zLnN0b3JlLFxuICAgIGNvbW1lbnQ6ICcnXG4gIH0pO1xuXG4gIHZhciBpc0RpciA9IGRhdGEudHlwZSA9PT0gJ2RpcmVjdG9yeSc7XG4gIHZhciBpc1N5bWxpbmsgPSBkYXRhLnR5cGUgPT09ICdzeW1saW5rJztcblxuICBpZiAoZGF0YS5uYW1lKSB7XG4gICAgZGF0YS5uYW1lID0gdXRpbC5zYW5pdGl6ZVBhdGgoZGF0YS5uYW1lKTtcblxuICAgIGlmICghaXNTeW1saW5rICYmIGRhdGEubmFtZS5zbGljZSgtMSkgPT09ICcvJykge1xuICAgICAgaXNEaXIgPSB0cnVlO1xuICAgICAgZGF0YS50eXBlID0gJ2RpcmVjdG9yeSc7XG4gICAgfSBlbHNlIGlmIChpc0Rpcikge1xuICAgICAgZGF0YS5uYW1lICs9ICcvJztcbiAgICB9XG4gIH1cblxuICBpZiAoaXNEaXIgfHwgaXNTeW1saW5rKSB7XG4gICAgZGF0YS5zdG9yZSA9IHRydWU7XG4gIH1cblxuICBkYXRhLmRhdGUgPSB1dGlsLmRhdGVpZnkoZGF0YS5kYXRlKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbi8qKlxuICogQXBwZW5kcyBhbiBlbnRyeSBnaXZlbiBhbiBpbnB1dCBzb3VyY2UgKHRleHQgc3RyaW5nLCBidWZmZXIsIG9yIHN0cmVhbSkuXG4gKlxuICogQHBhcmFtICB7KEJ1ZmZlcnxTdHJlYW18U3RyaW5nKX0gc291cmNlIFRoZSBpbnB1dCBzb3VyY2UuXG4gKiBAcGFyYW0gIHtPYmplY3R9IGRhdGFcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YS5uYW1lIFNldHMgdGhlIGVudHJ5IG5hbWUgaW5jbHVkaW5nIGludGVybmFsIHBhdGguXG4gKiBAcGFyYW0gIHtTdHJpbmd9IFtkYXRhLmNvbW1lbnRdIFNldHMgdGhlIGVudHJ5IGNvbW1lbnQuXG4gKiBAcGFyYW0gIHsoU3RyaW5nfERhdGUpfSBbZGF0YS5kYXRlPU5PVygpXSBTZXRzIHRoZSBlbnRyeSBkYXRlLlxuICogQHBhcmFtICB7TnVtYmVyfSBbZGF0YS5tb2RlPUQ6MDc1NS9GOjA2NDRdIFNldHMgdGhlIGVudHJ5IHBlcm1pc3Npb25zLlxuICogQHBhcmFtICB7Qm9vbGVhbn0gW2RhdGEuc3RvcmU9b3B0aW9ucy5zdG9yZV0gU2V0cyB0aGUgY29tcHJlc3Npb24gbWV0aG9kIHRvIFNUT1JFLlxuICogQHBhcmFtICB7U3RyaW5nfSBbZGF0YS50eXBlPWZpbGVdIFNldHMgdGhlIGVudHJ5IHR5cGUuIERlZmF1bHRzIHRvIGBkaXJlY3RvcnlgXG4gKiBpZiBuYW1lIGVuZHMgd2l0aCB0cmFpbGluZyBzbGFzaC5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB0aGlzXG4gKi9cblppcFN0cmVhbS5wcm90b3R5cGUuZW50cnkgPSBmdW5jdGlvbihzb3VyY2UsIGRhdGEsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IHRoaXMuX2VtaXRFcnJvckNhbGxiYWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBkYXRhID0gdGhpcy5fbm9ybWFsaXplRmlsZURhdGEoZGF0YSk7XG5cbiAgaWYgKGRhdGEudHlwZSAhPT0gJ2ZpbGUnICYmIGRhdGEudHlwZSAhPT0gJ2RpcmVjdG9yeScgJiYgZGF0YS50eXBlICE9PSAnc3ltbGluaycpIHtcbiAgICBjYWxsYmFjayhuZXcgRXJyb3IoZGF0YS50eXBlICsgJyBlbnRyaWVzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkJykpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGF0YS5uYW1lICE9PSAnc3RyaW5nJyB8fCBkYXRhLm5hbWUubGVuZ3RoID09PSAwKSB7XG4gICAgY2FsbGJhY2sobmV3IEVycm9yKCdlbnRyeSBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nIHZhbHVlJykpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkYXRhLnR5cGUgPT09ICdzeW1saW5rJyAmJiB0eXBlb2YgZGF0YS5saW5rbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ2VudHJ5IGxpbmtuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nIHZhbHVlIHdoZW4gdHlwZSBlcXVhbHMgc3ltbGluaycpKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZW50cnkgPSBuZXcgWmlwQXJjaGl2ZUVudHJ5KGRhdGEubmFtZSk7XG4gIGVudHJ5LnNldFRpbWUoZGF0YS5kYXRlLCB0aGlzLm9wdGlvbnMuZm9yY2VMb2NhbFRpbWUpO1xuXG4gIGlmIChkYXRhLm5hbWVQcmVwZW5kU2xhc2gpIHtcbiAgICBlbnRyeS5zZXROYW1lKGRhdGEubmFtZSwgdHJ1ZSk7XG4gIH1cblxuICBpZiAoZGF0YS5zdG9yZSkge1xuICAgIGVudHJ5LnNldE1ldGhvZCgwKTtcbiAgfVxuXG4gIGlmIChkYXRhLmNvbW1lbnQubGVuZ3RoID4gMCkge1xuICAgIGVudHJ5LnNldENvbW1lbnQoZGF0YS5jb21tZW50KTtcbiAgfVxuXG4gIGlmIChkYXRhLnR5cGUgPT09ICdzeW1saW5rJyAmJiB0eXBlb2YgZGF0YS5tb2RlICE9PSAnbnVtYmVyJykge1xuICAgIGRhdGEubW9kZSA9IDQwOTYwOyAvLyAwMTIwMDAwXG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGEubW9kZSA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAoZGF0YS50eXBlID09PSAnc3ltbGluaycpIHtcbiAgICAgIGRhdGEubW9kZSB8PSA0MDk2MDtcbiAgICB9XG5cbiAgICBlbnRyeS5zZXRVbml4TW9kZShkYXRhLm1vZGUpO1xuICB9XG5cbiAgaWYgKGRhdGEudHlwZSA9PT0gJ3N5bWxpbmsnICYmIHR5cGVvZiBkYXRhLmxpbmtuYW1lID09PSAnc3RyaW5nJykge1xuICAgIHNvdXJjZSA9IEJ1ZmZlci5mcm9tKGRhdGEubGlua25hbWUpO1xuICB9XG5cbiAgcmV0dXJuIFppcEFyY2hpdmVPdXRwdXRTdHJlYW0ucHJvdG90eXBlLmVudHJ5LmNhbGwodGhpcywgZW50cnksIHNvdXJjZSwgY2FsbGJhY2spO1xufTtcblxuLyoqXG4gKiBGaW5hbGl6ZXMgdGhlIGluc3RhbmNlIGFuZCBwcmV2ZW50cyBmdXJ0aGVyIGFwcGVuZGluZyB0byB0aGUgYXJjaGl2ZVxuICogc3RydWN0dXJlIChxdWV1ZSB3aWxsIGNvbnRpbnVlIHRpbCBkcmFpbmVkKS5cbiAqXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuWmlwU3RyZWFtLnByb3RvdHlwZS5maW5hbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmZpbmlzaCgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IG51bWJlciBvZiBieXRlcyB3cml0dGVuIHRvIHRoaXMgc3RyZWFtLlxuICogQGZ1bmN0aW9uIFppcFN0cmVhbSNnZXRCeXRlc1dyaXR0ZW5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cblxuLyoqXG4gKiBDb21wcmVzcyBDb21tb25zIFppcEFyY2hpdmVPdXRwdXRTdHJlYW1cbiAqIEBleHRlcm5hbCBaaXBBcmNoaXZlT3V0cHV0U3RyZWFtXG4gKiBAc2VlIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vYXJjaGl2ZXJqcy9ub2RlLWNvbXByZXNzLWNvbW1vbnN9XG4gKi9cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/zip-stream/index.js\n");

/***/ })

};
;