/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/end-of-stream";
exports.ids = ["vendor-chunks/end-of-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/end-of-stream/index.js":
/*!*********************************************!*\
  !*** ./node_modules/end-of-stream/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var once = __webpack_require__(/*! once */ \"(ssr)/./node_modules/once/once.js\");\n\nvar noop = function() {};\n\nvar isRequest = function(stream) {\n\treturn stream.setHeader && typeof stream.abort === 'function';\n};\n\nvar isChildProcess = function(stream) {\n\treturn stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3\n};\n\nvar eos = function(stream, opts, callback) {\n\tif (typeof opts === 'function') return eos(stream, null, opts);\n\tif (!opts) opts = {};\n\n\tcallback = once(callback || noop);\n\n\tvar ws = stream._writableState;\n\tvar rs = stream._readableState;\n\tvar readable = opts.readable || (opts.readable !== false && stream.readable);\n\tvar writable = opts.writable || (opts.writable !== false && stream.writable);\n\tvar cancelled = false;\n\n\tvar onlegacyfinish = function() {\n\t\tif (!stream.writable) onfinish();\n\t};\n\n\tvar onfinish = function() {\n\t\twritable = false;\n\t\tif (!readable) callback.call(stream);\n\t};\n\n\tvar onend = function() {\n\t\treadable = false;\n\t\tif (!writable) callback.call(stream);\n\t};\n\n\tvar onexit = function(exitCode) {\n\t\tcallback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);\n\t};\n\n\tvar onerror = function(err) {\n\t\tcallback.call(stream, err);\n\t};\n\n\tvar onclose = function() {\n\t\tprocess.nextTick(onclosenexttick);\n\t};\n\n\tvar onclosenexttick = function() {\n\t\tif (cancelled) return;\n\t\tif (readable && !(rs && (rs.ended && !rs.destroyed))) return callback.call(stream, new Error('premature close'));\n\t\tif (writable && !(ws && (ws.ended && !ws.destroyed))) return callback.call(stream, new Error('premature close'));\n\t};\n\n\tvar onrequest = function() {\n\t\tstream.req.on('finish', onfinish);\n\t};\n\n\tif (isRequest(stream)) {\n\t\tstream.on('complete', onfinish);\n\t\tstream.on('abort', onclose);\n\t\tif (stream.req) onrequest();\n\t\telse stream.on('request', onrequest);\n\t} else if (writable && !ws) { // legacy streams\n\t\tstream.on('end', onlegacyfinish);\n\t\tstream.on('close', onlegacyfinish);\n\t}\n\n\tif (isChildProcess(stream)) stream.on('exit', onexit);\n\n\tstream.on('end', onend);\n\tstream.on('finish', onfinish);\n\tif (opts.error !== false) stream.on('error', onerror);\n\tstream.on('close', onclose);\n\n\treturn function() {\n\t\tcancelled = true;\n\t\tstream.removeListener('complete', onfinish);\n\t\tstream.removeListener('abort', onclose);\n\t\tstream.removeListener('request', onrequest);\n\t\tif (stream.req) stream.req.removeListener('finish', onfinish);\n\t\tstream.removeListener('end', onlegacyfinish);\n\t\tstream.removeListener('close', onlegacyfinish);\n\t\tstream.removeListener('finish', onfinish);\n\t\tstream.removeListener('exit', onexit);\n\t\tstream.removeListener('end', onend);\n\t\tstream.removeListener('error', onerror);\n\t\tstream.removeListener('close', onclose);\n\t};\n};\n\nmodule.exports = eos;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5kLW9mLXN0cmVhbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxXQUFXLG1CQUFPLENBQUMsK0NBQU07O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLDRCQUE0QjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy9lbmQtb2Ytc3RyZWFtL2luZGV4LmpzP2I4NjgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG9uY2UgPSByZXF1aXJlKCdvbmNlJyk7XG5cbnZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxudmFyIGlzUmVxdWVzdCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuXHRyZXR1cm4gc3RyZWFtLnNldEhlYWRlciAmJiB0eXBlb2Ygc3RyZWFtLmFib3J0ID09PSAnZnVuY3Rpb24nO1xufTtcblxudmFyIGlzQ2hpbGRQcm9jZXNzID0gZnVuY3Rpb24oc3RyZWFtKSB7XG5cdHJldHVybiBzdHJlYW0uc3RkaW8gJiYgQXJyYXkuaXNBcnJheShzdHJlYW0uc3RkaW8pICYmIHN0cmVhbS5zdGRpby5sZW5ndGggPT09IDNcbn07XG5cbnZhciBlb3MgPSBmdW5jdGlvbihzdHJlYW0sIG9wdHMsIGNhbGxiYWNrKSB7XG5cdGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGVvcyhzdHJlYW0sIG51bGwsIG9wdHMpO1xuXHRpZiAoIW9wdHMpIG9wdHMgPSB7fTtcblxuXHRjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG5cblx0dmFyIHdzID0gc3RyZWFtLl93cml0YWJsZVN0YXRlO1xuXHR2YXIgcnMgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG5cdHZhciByZWFkYWJsZSA9IG9wdHMucmVhZGFibGUgfHwgKG9wdHMucmVhZGFibGUgIT09IGZhbHNlICYmIHN0cmVhbS5yZWFkYWJsZSk7XG5cdHZhciB3cml0YWJsZSA9IG9wdHMud3JpdGFibGUgfHwgKG9wdHMud3JpdGFibGUgIT09IGZhbHNlICYmIHN0cmVhbS53cml0YWJsZSk7XG5cdHZhciBjYW5jZWxsZWQgPSBmYWxzZTtcblxuXHR2YXIgb25sZWdhY3lmaW5pc2ggPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXN0cmVhbS53cml0YWJsZSkgb25maW5pc2goKTtcblx0fTtcblxuXHR2YXIgb25maW5pc2ggPSBmdW5jdGlvbigpIHtcblx0XHR3cml0YWJsZSA9IGZhbHNlO1xuXHRcdGlmICghcmVhZGFibGUpIGNhbGxiYWNrLmNhbGwoc3RyZWFtKTtcblx0fTtcblxuXHR2YXIgb25lbmQgPSBmdW5jdGlvbigpIHtcblx0XHRyZWFkYWJsZSA9IGZhbHNlO1xuXHRcdGlmICghd3JpdGFibGUpIGNhbGxiYWNrLmNhbGwoc3RyZWFtKTtcblx0fTtcblxuXHR2YXIgb25leGl0ID0gZnVuY3Rpb24oZXhpdENvZGUpIHtcblx0XHRjYWxsYmFjay5jYWxsKHN0cmVhbSwgZXhpdENvZGUgPyBuZXcgRXJyb3IoJ2V4aXRlZCB3aXRoIGVycm9yIGNvZGU6ICcgKyBleGl0Q29kZSkgOiBudWxsKTtcblx0fTtcblxuXHR2YXIgb25lcnJvciA9IGZ1bmN0aW9uKGVycikge1xuXHRcdGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBlcnIpO1xuXHR9O1xuXG5cdHZhciBvbmNsb3NlID0gZnVuY3Rpb24oKSB7XG5cdFx0cHJvY2Vzcy5uZXh0VGljayhvbmNsb3NlbmV4dHRpY2spO1xuXHR9O1xuXG5cdHZhciBvbmNsb3NlbmV4dHRpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoY2FuY2VsbGVkKSByZXR1cm47XG5cdFx0aWYgKHJlYWRhYmxlICYmICEocnMgJiYgKHJzLmVuZGVkICYmICFycy5kZXN0cm95ZWQpKSkgcmV0dXJuIGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBuZXcgRXJyb3IoJ3ByZW1hdHVyZSBjbG9zZScpKTtcblx0XHRpZiAod3JpdGFibGUgJiYgISh3cyAmJiAod3MuZW5kZWQgJiYgIXdzLmRlc3Ryb3llZCkpKSByZXR1cm4gY2FsbGJhY2suY2FsbChzdHJlYW0sIG5ldyBFcnJvcigncHJlbWF0dXJlIGNsb3NlJykpO1xuXHR9O1xuXG5cdHZhciBvbnJlcXVlc3QgPSBmdW5jdGlvbigpIHtcblx0XHRzdHJlYW0ucmVxLm9uKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cdH07XG5cblx0aWYgKGlzUmVxdWVzdChzdHJlYW0pKSB7XG5cdFx0c3RyZWFtLm9uKCdjb21wbGV0ZScsIG9uZmluaXNoKTtcblx0XHRzdHJlYW0ub24oJ2Fib3J0Jywgb25jbG9zZSk7XG5cdFx0aWYgKHN0cmVhbS5yZXEpIG9ucmVxdWVzdCgpO1xuXHRcdGVsc2Ugc3RyZWFtLm9uKCdyZXF1ZXN0Jywgb25yZXF1ZXN0KTtcblx0fSBlbHNlIGlmICh3cml0YWJsZSAmJiAhd3MpIHsgLy8gbGVnYWN5IHN0cmVhbXNcblx0XHRzdHJlYW0ub24oJ2VuZCcsIG9ubGVnYWN5ZmluaXNoKTtcblx0XHRzdHJlYW0ub24oJ2Nsb3NlJywgb25sZWdhY3lmaW5pc2gpO1xuXHR9XG5cblx0aWYgKGlzQ2hpbGRQcm9jZXNzKHN0cmVhbSkpIHN0cmVhbS5vbignZXhpdCcsIG9uZXhpdCk7XG5cblx0c3RyZWFtLm9uKCdlbmQnLCBvbmVuZCk7XG5cdHN0cmVhbS5vbignZmluaXNoJywgb25maW5pc2gpO1xuXHRpZiAob3B0cy5lcnJvciAhPT0gZmFsc2UpIHN0cmVhbS5vbignZXJyb3InLCBvbmVycm9yKTtcblx0c3RyZWFtLm9uKCdjbG9zZScsIG9uY2xvc2UpO1xuXG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRjYW5jZWxsZWQgPSB0cnVlO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignY29tcGxldGUnLCBvbmZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdhYm9ydCcsIG9uY2xvc2UpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcigncmVxdWVzdCcsIG9ucmVxdWVzdCk7XG5cdFx0aWYgKHN0cmVhbS5yZXEpIHN0cmVhbS5yZXEucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9ubGVnYWN5ZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25sZWdhY3lmaW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZXhpdCcsIG9uZXhpdCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBvbmVuZCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcblx0fTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW9zO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/end-of-stream/index.js\n");

/***/ })

};
;