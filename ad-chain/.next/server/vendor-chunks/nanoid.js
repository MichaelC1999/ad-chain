"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nanoid";
exports.ids = ["vendor-chunks/nanoid"];
exports.modules = {

/***/ "(ssr)/./node_modules/nanoid/index.js":
/*!**************************************!*\
  !*** ./node_modules/nanoid/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customAlphabet: () => (/* binding */ customAlphabet),\n/* harmony export */   customRandom: () => (/* binding */ customRandom),\n/* harmony export */   nanoid: () => (/* binding */ nanoid),\n/* harmony export */   random: () => (/* binding */ random),\n/* harmony export */   urlAlphabet: () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_1__.urlAlphabet)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-alphabet/index.js */ \"(ssr)/./node_modules/nanoid/url-alphabet/index.js\");\n\n\n\nconst POOL_SIZE_MULTIPLIER = 128\nlet pool, poolOffset\nlet fillPool = bytes => {\n  if (!pool || pool.length < bytes) {\n    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER)\n    ;(0,crypto__WEBPACK_IMPORTED_MODULE_0__.randomFillSync)(pool)\n    poolOffset = 0\n  } else if (poolOffset + bytes > pool.length) {\n    (0,crypto__WEBPACK_IMPORTED_MODULE_0__.randomFillSync)(pool)\n    poolOffset = 0\n  }\n  poolOffset += bytes\n}\nlet random = bytes => {\n  fillPool((bytes -= 0))\n  return pool.subarray(poolOffset - bytes, poolOffset)\n}\nlet customRandom = (alphabet, defaultSize, getRandom) => {\n  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1\n  let step = Math.ceil((1.6 * mask * defaultSize) / alphabet.length)\n  return (size = defaultSize) => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      let i = step\n      while (i--) {\n        id += alphabet[bytes[i] & mask] || ''\n        if (id.length === size) return id\n      }\n    }\n  }\n}\nlet customAlphabet = (alphabet, size = 21) =>\n  customRandom(alphabet, size, random)\nlet nanoid = (size = 21) => {\n  fillPool((size -= 0))\n  let id = ''\n  for (let i = poolOffset - size; i < poolOffset; i++) {\n    id += _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_1__.urlAlphabet[pool[i] & 63]\n  }\n  return id\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDYztBQUMvQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBYztBQUNsQjtBQUNBLElBQUk7QUFDSixJQUFJLHNEQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ087QUFDUDtBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQjtBQUNsRCxVQUFVLCtEQUFXO0FBQ3JCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmpzPzdmY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmFuZG9tRmlsbFN5bmMgfSBmcm9tICdjcnlwdG8nXG5pbXBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuZXhwb3J0IHsgdXJsQWxwaGFiZXQgfVxuY29uc3QgUE9PTF9TSVpFX01VTFRJUExJRVIgPSAxMjhcbmxldCBwb29sLCBwb29sT2Zmc2V0XG5sZXQgZmlsbFBvb2wgPSBieXRlcyA9PiB7XG4gIGlmICghcG9vbCB8fCBwb29sLmxlbmd0aCA8IGJ5dGVzKSB7XG4gICAgcG9vbCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShieXRlcyAqIFBPT0xfU0laRV9NVUxUSVBMSUVSKVxuICAgIHJhbmRvbUZpbGxTeW5jKHBvb2wpXG4gICAgcG9vbE9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChwb29sT2Zmc2V0ICsgYnl0ZXMgPiBwb29sLmxlbmd0aCkge1xuICAgIHJhbmRvbUZpbGxTeW5jKHBvb2wpXG4gICAgcG9vbE9mZnNldCA9IDBcbiAgfVxuICBwb29sT2Zmc2V0ICs9IGJ5dGVzXG59XG5leHBvcnQgbGV0IHJhbmRvbSA9IGJ5dGVzID0+IHtcbiAgZmlsbFBvb2woKGJ5dGVzIC09IDApKVxuICByZXR1cm4gcG9vbC5zdWJhcnJheShwb29sT2Zmc2V0IC0gYnl0ZXMsIHBvb2xPZmZzZXQpXG59XG5leHBvcnQgbGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgZGVmYXVsdFNpemUsIGdldFJhbmRvbSkgPT4ge1xuICBsZXQgbWFzayA9ICgyIDw8ICgzMSAtIE1hdGguY2x6MzIoKGFscGhhYmV0Lmxlbmd0aCAtIDEpIHwgMSkpKSAtIDFcbiAgbGV0IHN0ZXAgPSBNYXRoLmNlaWwoKDEuNiAqIG1hc2sgKiBkZWZhdWx0U2l6ZSkgLyBhbHBoYWJldC5sZW5ndGgpXG4gIHJldHVybiAoc2l6ZSA9IGRlZmF1bHRTaXplKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICBsZXQgaSA9IHN0ZXBcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaWQgKz0gYWxwaGFiZXRbYnl0ZXNbaV0gJiBtYXNrXSB8fCAnJ1xuICAgICAgICBpZiAoaWQubGVuZ3RoID09PSBzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBsZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5leHBvcnQgbGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+IHtcbiAgZmlsbFBvb2woKHNpemUgLT0gMCkpXG4gIGxldCBpZCA9ICcnXG4gIGZvciAobGV0IGkgPSBwb29sT2Zmc2V0IC0gc2l6ZTsgaSA8IHBvb2xPZmZzZXQ7IGkrKykge1xuICAgIGlkICs9IHVybEFscGhhYmV0W3Bvb2xbaV0gJiA2M11cbiAgfVxuICByZXR1cm4gaWRcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nanoid/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   urlAlphabet: () => (/* binding */ urlAlphabet)\n/* harmony export */ });\nconst urlAlphabet =\n  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcz8zZjJhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1cmxBbHBoYWJldCA9XG4gICd1c2VhbmRvbS0yNlQxOTgzNDBQWDc1cHhKQUNLVkVSWU1JTkRCVVNIV09MRl9HUVpiZmdoamtscXZ3eXpyaWN0J1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nanoid/url-alphabet/index.js\n");

/***/ })

};
;