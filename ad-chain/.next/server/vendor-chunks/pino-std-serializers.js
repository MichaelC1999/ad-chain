"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/pino-std-serializers";
exports.ids = ["vendor-chunks/pino-std-serializers"];
exports.modules = {

/***/ "(ssr)/./node_modules/pino-std-serializers/index.js":
/*!****************************************************!*\
  !*** ./node_modules/pino-std-serializers/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst errSerializer = __webpack_require__(/*! ./lib/err */ \"(ssr)/./node_modules/pino-std-serializers/lib/err.js\")\nconst reqSerializers = __webpack_require__(/*! ./lib/req */ \"(ssr)/./node_modules/pino-std-serializers/lib/req.js\")\nconst resSerializers = __webpack_require__(/*! ./lib/res */ \"(ssr)/./node_modules/pino-std-serializers/lib/res.js\")\n\nmodule.exports = {\n  err: errSerializer,\n  mapHttpRequest: reqSerializers.mapHttpRequest,\n  mapHttpResponse: resSerializers.mapHttpResponse,\n  req: reqSerializers.reqSerializer,\n  res: resSerializers.resSerializer,\n\n  wrapErrorSerializer: function wrapErrorSerializer (customSerializer) {\n    if (customSerializer === errSerializer) return customSerializer\n    return function wrapErrSerializer (err) {\n      return customSerializer(errSerializer(err))\n    }\n  },\n\n  wrapRequestSerializer: function wrapRequestSerializer (customSerializer) {\n    if (customSerializer === reqSerializers.reqSerializer) return customSerializer\n    return function wrappedReqSerializer (req) {\n      return customSerializer(reqSerializers.reqSerializer(req))\n    }\n  },\n\n  wrapResponseSerializer: function wrapResponseSerializer (customSerializer) {\n    if (customSerializer === resSerializers.resSerializer) return customSerializer\n    return function wrappedResSerializer (res) {\n      return customSerializer(resSerializers.resSerializer(res))\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVosc0JBQXNCLG1CQUFPLENBQUMsdUVBQVc7QUFDekMsdUJBQXVCLG1CQUFPLENBQUMsdUVBQVc7QUFDMUMsdUJBQXVCLG1CQUFPLENBQUMsdUVBQVc7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvaW5kZXguanM/MjRhZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuY29uc3QgZXJyU2VyaWFsaXplciA9IHJlcXVpcmUoJy4vbGliL2VycicpXG5jb25zdCByZXFTZXJpYWxpemVycyA9IHJlcXVpcmUoJy4vbGliL3JlcScpXG5jb25zdCByZXNTZXJpYWxpemVycyA9IHJlcXVpcmUoJy4vbGliL3JlcycpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlcnI6IGVyclNlcmlhbGl6ZXIsXG4gIG1hcEh0dHBSZXF1ZXN0OiByZXFTZXJpYWxpemVycy5tYXBIdHRwUmVxdWVzdCxcbiAgbWFwSHR0cFJlc3BvbnNlOiByZXNTZXJpYWxpemVycy5tYXBIdHRwUmVzcG9uc2UsXG4gIHJlcTogcmVxU2VyaWFsaXplcnMucmVxU2VyaWFsaXplcixcbiAgcmVzOiByZXNTZXJpYWxpemVycy5yZXNTZXJpYWxpemVyLFxuXG4gIHdyYXBFcnJvclNlcmlhbGl6ZXI6IGZ1bmN0aW9uIHdyYXBFcnJvclNlcmlhbGl6ZXIgKGN1c3RvbVNlcmlhbGl6ZXIpIHtcbiAgICBpZiAoY3VzdG9tU2VyaWFsaXplciA9PT0gZXJyU2VyaWFsaXplcikgcmV0dXJuIGN1c3RvbVNlcmlhbGl6ZXJcbiAgICByZXR1cm4gZnVuY3Rpb24gd3JhcEVyclNlcmlhbGl6ZXIgKGVycikge1xuICAgICAgcmV0dXJuIGN1c3RvbVNlcmlhbGl6ZXIoZXJyU2VyaWFsaXplcihlcnIpKVxuICAgIH1cbiAgfSxcblxuICB3cmFwUmVxdWVzdFNlcmlhbGl6ZXI6IGZ1bmN0aW9uIHdyYXBSZXF1ZXN0U2VyaWFsaXplciAoY3VzdG9tU2VyaWFsaXplcikge1xuICAgIGlmIChjdXN0b21TZXJpYWxpemVyID09PSByZXFTZXJpYWxpemVycy5yZXFTZXJpYWxpemVyKSByZXR1cm4gY3VzdG9tU2VyaWFsaXplclxuICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVkUmVxU2VyaWFsaXplciAocmVxKSB7XG4gICAgICByZXR1cm4gY3VzdG9tU2VyaWFsaXplcihyZXFTZXJpYWxpemVycy5yZXFTZXJpYWxpemVyKHJlcSkpXG4gICAgfVxuICB9LFxuXG4gIHdyYXBSZXNwb25zZVNlcmlhbGl6ZXI6IGZ1bmN0aW9uIHdyYXBSZXNwb25zZVNlcmlhbGl6ZXIgKGN1c3RvbVNlcmlhbGl6ZXIpIHtcbiAgICBpZiAoY3VzdG9tU2VyaWFsaXplciA9PT0gcmVzU2VyaWFsaXplcnMucmVzU2VyaWFsaXplcikgcmV0dXJuIGN1c3RvbVNlcmlhbGl6ZXJcbiAgICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlZFJlc1NlcmlhbGl6ZXIgKHJlcykge1xuICAgICAgcmV0dXJuIGN1c3RvbVNlcmlhbGl6ZXIocmVzU2VyaWFsaXplcnMucmVzU2VyaWFsaXplcihyZXMpKVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pino-std-serializers/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/pino-std-serializers/lib/err.js":
/*!******************************************************!*\
  !*** ./node_modules/pino-std-serializers/lib/err.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = errSerializer\n\nconst { toString } = Object.prototype\nconst seen = Symbol('circular-ref-tag')\nconst rawSymbol = Symbol('pino-raw-err-ref')\nconst pinoErrProto = Object.create({}, {\n  type: {\n    enumerable: true,\n    writable: true,\n    value: undefined\n  },\n  message: {\n    enumerable: true,\n    writable: true,\n    value: undefined\n  },\n  stack: {\n    enumerable: true,\n    writable: true,\n    value: undefined\n  },\n  raw: {\n    enumerable: false,\n    get: function () {\n      return this[rawSymbol]\n    },\n    set: function (val) {\n      this[rawSymbol] = val\n    }\n  }\n})\nObject.defineProperty(pinoErrProto, rawSymbol, {\n  writable: true,\n  value: {}\n})\n\nfunction errSerializer (err) {\n  if (!(err instanceof Error)) {\n    return err\n  }\n\n  err[seen] = undefined // tag to prevent re-looking at this\n  const _err = Object.create(pinoErrProto)\n  _err.type = toString.call(err.constructor) === '[object Function]'\n    ? err.constructor.name\n    : err.name\n  _err.message = err.message\n  _err.stack = err.stack\n  for (const key in err) {\n    if (_err[key] === undefined) {\n      const val = err[key]\n      if (val instanceof Error) {\n        /* eslint-disable no-prototype-builtins */\n        if (!val.hasOwnProperty(seen)) {\n          _err[key] = errSerializer(val)\n        }\n      } else {\n        _err[key] = val\n      }\n    }\n  }\n\n  delete err[seen] // clean up tag in case err is serialized again later\n  _err.raw = err\n  return _err\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvbGliL2Vyci5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjs7QUFFQSxRQUFRLFdBQVc7QUFDbkI7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvbGliL2Vyci5qcz8xNmU4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVyclNlcmlhbGl6ZXJcblxuY29uc3QgeyB0b1N0cmluZyB9ID0gT2JqZWN0LnByb3RvdHlwZVxuY29uc3Qgc2VlbiA9IFN5bWJvbCgnY2lyY3VsYXItcmVmLXRhZycpXG5jb25zdCByYXdTeW1ib2wgPSBTeW1ib2woJ3Bpbm8tcmF3LWVyci1yZWYnKVxuY29uc3QgcGlub0VyclByb3RvID0gT2JqZWN0LmNyZWF0ZSh7fSwge1xuICB0eXBlOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdW5kZWZpbmVkXG4gIH0sXG4gIG1lc3NhZ2U6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgfSxcbiAgc3RhY2s6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgfSxcbiAgcmF3OiB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpc1tyYXdTeW1ib2xdXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHRoaXNbcmF3U3ltYm9sXSA9IHZhbFxuICAgIH1cbiAgfVxufSlcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwaW5vRXJyUHJvdG8sIHJhd1N5bWJvbCwge1xuICB3cml0YWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHt9XG59KVxuXG5mdW5jdGlvbiBlcnJTZXJpYWxpemVyIChlcnIpIHtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgcmV0dXJuIGVyclxuICB9XG5cbiAgZXJyW3NlZW5dID0gdW5kZWZpbmVkIC8vIHRhZyB0byBwcmV2ZW50IHJlLWxvb2tpbmcgYXQgdGhpc1xuICBjb25zdCBfZXJyID0gT2JqZWN0LmNyZWF0ZShwaW5vRXJyUHJvdG8pXG4gIF9lcnIudHlwZSA9IHRvU3RyaW5nLmNhbGwoZXJyLmNvbnN0cnVjdG9yKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJ1xuICAgID8gZXJyLmNvbnN0cnVjdG9yLm5hbWVcbiAgICA6IGVyci5uYW1lXG4gIF9lcnIubWVzc2FnZSA9IGVyci5tZXNzYWdlXG4gIF9lcnIuc3RhY2sgPSBlcnIuc3RhY2tcbiAgZm9yIChjb25zdCBrZXkgaW4gZXJyKSB7XG4gICAgaWYgKF9lcnJba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCB2YWwgPSBlcnJba2V5XVxuICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuICAgICAgICBpZiAoIXZhbC5oYXNPd25Qcm9wZXJ0eShzZWVuKSkge1xuICAgICAgICAgIF9lcnJba2V5XSA9IGVyclNlcmlhbGl6ZXIodmFsKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfZXJyW2tleV0gPSB2YWxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZWxldGUgZXJyW3NlZW5dIC8vIGNsZWFuIHVwIHRhZyBpbiBjYXNlIGVyciBpcyBzZXJpYWxpemVkIGFnYWluIGxhdGVyXG4gIF9lcnIucmF3ID0gZXJyXG4gIHJldHVybiBfZXJyXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pino-std-serializers/lib/err.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/pino-std-serializers/lib/req.js":
/*!******************************************************!*\
  !*** ./node_modules/pino-std-serializers/lib/req.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = {\n  mapHttpRequest,\n  reqSerializer\n}\n\nconst rawSymbol = Symbol('pino-raw-req-ref')\nconst pinoReqProto = Object.create({}, {\n  id: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  method: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  url: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  query: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  params: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  headers: {\n    enumerable: true,\n    writable: true,\n    value: {}\n  },\n  remoteAddress: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  remotePort: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  raw: {\n    enumerable: false,\n    get: function () {\n      return this[rawSymbol]\n    },\n    set: function (val) {\n      this[rawSymbol] = val\n    }\n  }\n})\nObject.defineProperty(pinoReqProto, rawSymbol, {\n  writable: true,\n  value: {}\n})\n\nfunction reqSerializer (req) {\n  // req.info is for hapi compat.\n  const connection = req.info || req.socket\n  const _req = Object.create(pinoReqProto)\n  _req.id = (typeof req.id === 'function' ? req.id() : (req.id || (req.info ? req.info.id : undefined)))\n  _req.method = req.method\n  // req.originalUrl is for expressjs compat.\n  if (req.originalUrl) {\n    _req.url = req.originalUrl\n    _req.query = req.query\n    _req.params = req.params\n  } else {\n    // req.url.path is  for hapi compat.\n    _req.url = req.path || (req.url ? (req.url.path || req.url) : undefined)\n  }\n  _req.headers = req.headers\n  _req.remoteAddress = connection && connection.remoteAddress\n  _req.remotePort = connection && connection.remotePort\n  // req.raw is  for hapi compat/equivalence\n  _req.raw = req.raw || req\n  return _req\n}\n\nfunction mapHttpRequest (req) {\n  return {\n    req: reqSerializer(req)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvbGliL3JlcS5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvbGliL3JlcS5qcz9kODlkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWFwSHR0cFJlcXVlc3QsXG4gIHJlcVNlcmlhbGl6ZXJcbn1cblxuY29uc3QgcmF3U3ltYm9sID0gU3ltYm9sKCdwaW5vLXJhdy1yZXEtcmVmJylcbmNvbnN0IHBpbm9SZXFQcm90byA9IE9iamVjdC5jcmVhdGUoe30sIHtcbiAgaWQ6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAnJ1xuICB9LFxuICBtZXRob2Q6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAnJ1xuICB9LFxuICB1cmw6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiAnJ1xuICB9LFxuICBxdWVyeToge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6ICcnXG4gIH0sXG4gIHBhcmFtczoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6ICcnXG4gIH0sXG4gIGhlYWRlcnM6IHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiB7fVxuICB9LFxuICByZW1vdGVBZGRyZXNzOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogJydcbiAgfSxcbiAgcmVtb3RlUG9ydDoge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6ICcnXG4gIH0sXG4gIHJhdzoge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXNbcmF3U3ltYm9sXVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICB0aGlzW3Jhd1N5bWJvbF0gPSB2YWxcbiAgICB9XG4gIH1cbn0pXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocGlub1JlcVByb3RvLCByYXdTeW1ib2wsIHtcbiAgd3JpdGFibGU6IHRydWUsXG4gIHZhbHVlOiB7fVxufSlcblxuZnVuY3Rpb24gcmVxU2VyaWFsaXplciAocmVxKSB7XG4gIC8vIHJlcS5pbmZvIGlzIGZvciBoYXBpIGNvbXBhdC5cbiAgY29uc3QgY29ubmVjdGlvbiA9IHJlcS5pbmZvIHx8IHJlcS5zb2NrZXRcbiAgY29uc3QgX3JlcSA9IE9iamVjdC5jcmVhdGUocGlub1JlcVByb3RvKVxuICBfcmVxLmlkID0gKHR5cGVvZiByZXEuaWQgPT09ICdmdW5jdGlvbicgPyByZXEuaWQoKSA6IChyZXEuaWQgfHwgKHJlcS5pbmZvID8gcmVxLmluZm8uaWQgOiB1bmRlZmluZWQpKSlcbiAgX3JlcS5tZXRob2QgPSByZXEubWV0aG9kXG4gIC8vIHJlcS5vcmlnaW5hbFVybCBpcyBmb3IgZXhwcmVzc2pzIGNvbXBhdC5cbiAgaWYgKHJlcS5vcmlnaW5hbFVybCkge1xuICAgIF9yZXEudXJsID0gcmVxLm9yaWdpbmFsVXJsXG4gICAgX3JlcS5xdWVyeSA9IHJlcS5xdWVyeVxuICAgIF9yZXEucGFyYW1zID0gcmVxLnBhcmFtc1xuICB9IGVsc2Uge1xuICAgIC8vIHJlcS51cmwucGF0aCBpcyAgZm9yIGhhcGkgY29tcGF0LlxuICAgIF9yZXEudXJsID0gcmVxLnBhdGggfHwgKHJlcS51cmwgPyAocmVxLnVybC5wYXRoIHx8IHJlcS51cmwpIDogdW5kZWZpbmVkKVxuICB9XG4gIF9yZXEuaGVhZGVycyA9IHJlcS5oZWFkZXJzXG4gIF9yZXEucmVtb3RlQWRkcmVzcyA9IGNvbm5lY3Rpb24gJiYgY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzXG4gIF9yZXEucmVtb3RlUG9ydCA9IGNvbm5lY3Rpb24gJiYgY29ubmVjdGlvbi5yZW1vdGVQb3J0XG4gIC8vIHJlcS5yYXcgaXMgIGZvciBoYXBpIGNvbXBhdC9lcXVpdmFsZW5jZVxuICBfcmVxLnJhdyA9IHJlcS5yYXcgfHwgcmVxXG4gIHJldHVybiBfcmVxXG59XG5cbmZ1bmN0aW9uIG1hcEh0dHBSZXF1ZXN0IChyZXEpIHtcbiAgcmV0dXJuIHtcbiAgICByZXE6IHJlcVNlcmlhbGl6ZXIocmVxKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pino-std-serializers/lib/req.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/pino-std-serializers/lib/res.js":
/*!******************************************************!*\
  !*** ./node_modules/pino-std-serializers/lib/res.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = {\n  mapHttpResponse,\n  resSerializer\n}\n\nconst rawSymbol = Symbol('pino-raw-res-ref')\nconst pinoResProto = Object.create({}, {\n  statusCode: {\n    enumerable: true,\n    writable: true,\n    value: 0\n  },\n  headers: {\n    enumerable: true,\n    writable: true,\n    value: ''\n  },\n  raw: {\n    enumerable: false,\n    get: function () {\n      return this[rawSymbol]\n    },\n    set: function (val) {\n      this[rawSymbol] = val\n    }\n  }\n})\nObject.defineProperty(pinoResProto, rawSymbol, {\n  writable: true,\n  value: {}\n})\n\nfunction resSerializer (res) {\n  const _res = Object.create(pinoResProto)\n  _res.statusCode = res.statusCode\n  _res.headers = res.getHeaders ? res.getHeaders() : res._headers\n  _res.raw = res\n  return _res\n}\n\nfunction mapHttpResponse (res) {\n  return {\n    res: resSerializer(res)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGluby1zdGQtc2VyaWFsaXplcnMvbGliL3Jlcy5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL3Bpbm8tc3RkLXNlcmlhbGl6ZXJzL2xpYi9yZXMuanM/NjRhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1hcEh0dHBSZXNwb25zZSxcbiAgcmVzU2VyaWFsaXplclxufVxuXG5jb25zdCByYXdTeW1ib2wgPSBTeW1ib2woJ3Bpbm8tcmF3LXJlcy1yZWYnKVxuY29uc3QgcGlub1Jlc1Byb3RvID0gT2JqZWN0LmNyZWF0ZSh7fSwge1xuICBzdGF0dXNDb2RlOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogMFxuICB9LFxuICBoZWFkZXJzOiB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogJydcbiAgfSxcbiAgcmF3OiB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpc1tyYXdTeW1ib2xdXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHRoaXNbcmF3U3ltYm9sXSA9IHZhbFxuICAgIH1cbiAgfVxufSlcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwaW5vUmVzUHJvdG8sIHJhd1N5bWJvbCwge1xuICB3cml0YWJsZTogdHJ1ZSxcbiAgdmFsdWU6IHt9XG59KVxuXG5mdW5jdGlvbiByZXNTZXJpYWxpemVyIChyZXMpIHtcbiAgY29uc3QgX3JlcyA9IE9iamVjdC5jcmVhdGUocGlub1Jlc1Byb3RvKVxuICBfcmVzLnN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZVxuICBfcmVzLmhlYWRlcnMgPSByZXMuZ2V0SGVhZGVycyA/IHJlcy5nZXRIZWFkZXJzKCkgOiByZXMuX2hlYWRlcnNcbiAgX3Jlcy5yYXcgPSByZXNcbiAgcmV0dXJuIF9yZXNcbn1cblxuZnVuY3Rpb24gbWFwSHR0cFJlc3BvbnNlIChyZXMpIHtcbiAgcmV0dXJuIHtcbiAgICByZXM6IHJlc1NlcmlhbGl6ZXIocmVzKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/pino-std-serializers/lib/res.js\n");

/***/ })

};
;