"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm-strikethrough";
exports.ids = ["vendor-chunks/micromark-extension-gfm-strikethrough"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js":
/*!****************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethroughHtml: () => (/* binding */ gfmStrikethroughHtml)\n/* harmony export */ });\n/**\n * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension\n */\n\n// To do: next major: expose function instead of object.\n\n/**\n * Extension for `micromark` that can be passed in `htmlExtensions`, to\n * support GFM strikethrough when serializing to HTML.\n *\n * @type {HtmlExtension}\n */\nconst gfmStrikethroughHtml = {\n  enter: {\n    strikethrough() {\n      this.tag('<del>')\n    }\n  },\n  exit: {\n    strikethrough() {\n      this.tag('</del>')\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL2h0bWwuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsYUFBYSw4Q0FBOEM7QUFDM0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL2h0bWwuanM/MGYwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuSHRtbEV4dGVuc2lvbn0gSHRtbEV4dGVuc2lvblxuICovXG5cbi8vIFRvIGRvOiBuZXh0IG1ham9yOiBleHBvc2UgZnVuY3Rpb24gaW5zdGVhZCBvZiBvYmplY3QuXG5cbi8qKlxuICogRXh0ZW5zaW9uIGZvciBgbWljcm9tYXJrYCB0aGF0IGNhbiBiZSBwYXNzZWQgaW4gYGh0bWxFeHRlbnNpb25zYCwgdG9cbiAqIHN1cHBvcnQgR0ZNIHN0cmlrZXRocm91Z2ggd2hlbiBzZXJpYWxpemluZyB0byBIVE1MLlxuICpcbiAqIEB0eXBlIHtIdG1sRXh0ZW5zaW9ufVxuICovXG5leHBvcnQgY29uc3QgZ2ZtU3RyaWtldGhyb3VnaEh0bWwgPSB7XG4gIGVudGVyOiB7XG4gICAgc3RyaWtldGhyb3VnaCgpIHtcbiAgICAgIHRoaXMudGFnKCc8ZGVsPicpXG4gICAgfVxuICB9LFxuICBleGl0OiB7XG4gICAgc3RyaWtldGhyb3VnaCgpIHtcbiAgICAgIHRoaXMudGFnKCc8L2RlbD4nKVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js":
/*!******************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmStrikethrough: () => (/* binding */ gfmStrikethrough)\n/* harmony export */ });\n/* harmony import */ var uvu_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uvu/assert */ \"(ssr)/./node_modules/uvu/assert/index.mjs\");\n/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-chunked */ \"(ssr)/./node_modules/micromark-util-chunked/dev/index.js\");\n/* harmony import */ var micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-util-classify-character */ \"(ssr)/./node_modules/micromark-util-classify-character/dev/index.js\");\n/* harmony import */ var micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-resolve-all */ \"(ssr)/./node_modules/micromark-util-resolve-all/index.js\");\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"(ssr)/./node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-util-symbol/constants.js */ \"(ssr)/./node_modules/micromark-util-symbol/constants.js\");\n/* harmony import */ var micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol/types.js */ \"(ssr)/./node_modules/micromark-util-symbol/types.js\");\n/**\n * @typedef {import('micromark-util-types').Event} Event\n * @typedef {import('micromark-util-types').Extension} Extension\n * @typedef {import('micromark-util-types').Resolver} Resolver\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').Token} Token\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n * @typedef {import('micromark-util-types').Tokenizer} Tokenizer\n *\n * @typedef Options\n *   Configuration (optional).\n * @property {boolean} [singleTilde=true]\n *   Whether to support strikethrough with a single tilde.\n *\n *   Single tildes work on github.com, but are technically prohibited by the\n *   GFM spec.\n */\n\n\n\n\n\n\n\n\n\n/**\n * Create an extension for `micromark` to enable GFM strikethrough syntax.\n *\n * @param {Options | null | undefined} [options]\n *   Configuration.\n * @returns {Extension}\n *   Extension for `micromark` that can be passed in `extensions`, to\n *   enable GFM strikethrough syntax.\n */\nfunction gfmStrikethrough(options) {\n  const options_ = options || {}\n  let single = options_.singleTilde\n  const tokenizer = {\n    tokenize: tokenizeStrikethrough,\n    resolveAll: resolveAllStrikethrough\n  }\n\n  if (single === null || single === undefined) {\n    single = true\n  }\n\n  return {\n    text: {[micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.tilde]: tokenizer},\n    insideSpan: {null: [tokenizer]},\n    attentionMarkers: {null: [micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.tilde]}\n  }\n\n  /**\n   * Take events and resolve strikethrough.\n   *\n   * @type {Resolver}\n   */\n  function resolveAllStrikethrough(events, context) {\n    let index = -1\n\n    // Walk through all events.\n    while (++index < events.length) {\n      // Find a token that can close.\n      if (\n        events[index][0] === 'enter' &&\n        events[index][1].type === 'strikethroughSequenceTemporary' &&\n        events[index][1]._close\n      ) {\n        let open = index\n\n        // Now walk back to find an opener.\n        while (open--) {\n          // Find a token that can open the closer.\n          if (\n            events[open][0] === 'exit' &&\n            events[open][1].type === 'strikethroughSequenceTemporary' &&\n            events[open][1]._open &&\n            // If the sizes are the same:\n            events[index][1].end.offset - events[index][1].start.offset ===\n              events[open][1].end.offset - events[open][1].start.offset\n          ) {\n            events[index][1].type = 'strikethroughSequence'\n            events[open][1].type = 'strikethroughSequence'\n\n            /** @type {Token} */\n            const strikethrough = {\n              type: 'strikethrough',\n              start: Object.assign({}, events[open][1].start),\n              end: Object.assign({}, events[index][1].end)\n            }\n\n            /** @type {Token} */\n            const text = {\n              type: 'strikethroughText',\n              start: Object.assign({}, events[open][1].end),\n              end: Object.assign({}, events[index][1].start)\n            }\n\n            // Opening.\n            /** @type {Array<Event>} */\n            const nextEvents = [\n              ['enter', strikethrough, context],\n              ['enter', events[open][1], context],\n              ['exit', events[open][1], context],\n              ['enter', text, context]\n            ]\n\n            const insideSpan = context.parser.constructs.insideSpan.null\n\n            if (insideSpan) {\n              // Between.\n              (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(\n                nextEvents,\n                nextEvents.length,\n                0,\n                (0,micromark_util_resolve_all__WEBPACK_IMPORTED_MODULE_3__.resolveAll)(insideSpan, events.slice(open + 1, index), context)\n              )\n            }\n\n            // Closing.\n            (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(nextEvents, nextEvents.length, 0, [\n              ['exit', text, context],\n              ['enter', events[index][1], context],\n              ['exit', events[index][1], context],\n              ['exit', strikethrough, context]\n            ])\n\n            ;(0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_2__.splice)(events, open - 1, index - open + 3, nextEvents)\n\n            index = open + nextEvents.length - 2\n            break\n          }\n        }\n      }\n    }\n\n    index = -1\n\n    while (++index < events.length) {\n      if (events[index][1].type === 'strikethroughSequenceTemporary') {\n        events[index][1].type = micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__.types.data\n      }\n    }\n\n    return events\n  }\n\n  /**\n   * @this {TokenizeContext}\n   * @type {Tokenizer}\n   */\n  function tokenizeStrikethrough(effects, ok, nok) {\n    const previous = this.previous\n    const events = this.events\n    let size = 0\n\n    return start\n\n    /** @type {State} */\n    function start(code) {\n      ;(0,uvu_assert__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.tilde, 'expected `~`')\n\n      if (\n        previous === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.tilde &&\n        events[events.length - 1][1].type !== micromark_util_symbol_types_js__WEBPACK_IMPORTED_MODULE_4__.types.characterEscape\n      ) {\n        return nok(code)\n      }\n\n      effects.enter('strikethroughSequenceTemporary')\n      return more(code)\n    }\n\n    /** @type {State} */\n    function more(code) {\n      const before = (0,micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__.classifyCharacter)(previous)\n\n      if (code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_1__.codes.tilde) {\n        // If this is the third marker, exit.\n        if (size > 1) return nok(code)\n        effects.consume(code)\n        size++\n        return more\n      }\n\n      if (size < 2 && !single) return nok(code)\n      const token = effects.exit('strikethroughSequenceTemporary')\n      const after = (0,micromark_util_classify_character__WEBPACK_IMPORTED_MODULE_5__.classifyCharacter)(code)\n      token._open =\n        !after || (after === micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_6__.constants.attentionSideAfter && Boolean(before))\n      token._close =\n        !before || (before === micromark_util_symbol_constants_js__WEBPACK_IMPORTED_MODULE_6__.constants.attentionSideAfter && Boolean(after))\n      return ok(code)\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9kZXYvbGliL3N5bnRheC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0EsYUFBYSxzQ0FBc0M7QUFDbkQsYUFBYSwwQ0FBMEM7QUFDdkQsYUFBYSx5Q0FBeUM7QUFDdEQsYUFBYSxzQ0FBc0M7QUFDbkQsYUFBYSxzQ0FBc0M7QUFDbkQsYUFBYSxnREFBZ0Q7QUFDN0QsYUFBYSwwQ0FBMEM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVDO0FBQ007QUFDc0I7QUFDZDtBQUNEO0FBQ1E7QUFDUjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0QkFBNEI7QUFDdkM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxDQUFDLGlFQUFLLG1CQUFtQjtBQUNwQyxpQkFBaUIsa0JBQWtCO0FBQ25DLHVCQUF1QixPQUFPLGlFQUFLO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DOztBQUVBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLDhEQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzRUFBVTtBQUMxQjtBQUNBOztBQUVBO0FBQ0EsWUFBWSw4REFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksK0RBQU07O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLGlFQUFLO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxNQUFNLCtDQUFNLFVBQVUsaUVBQUs7O0FBRTNCO0FBQ0EscUJBQXFCLGlFQUFLO0FBQzFCLDhDQUE4QyxpRUFBSztBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWUsT0FBTztBQUN0QjtBQUNBLHFCQUFxQixvRkFBaUI7O0FBRXRDLG1CQUFtQixpRUFBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixvRkFBaUI7QUFDckM7QUFDQSw2QkFBNkIseUVBQVM7QUFDdEM7QUFDQSwrQkFBK0IseUVBQVM7QUFDeEM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXN0cmlrZXRocm91Z2gvZGV2L2xpYi9zeW50YXguanM/ZTlmOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRXZlbnR9IEV2ZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkV4dGVuc2lvbn0gRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlJlc29sdmVyfSBSZXNvbHZlclxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW59IFRva2VuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplQ29udGV4dH0gVG9rZW5pemVDb250ZXh0XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuaXplcn0gVG9rZW5pemVyXG4gKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtzaW5nbGVUaWxkZT10cnVlXVxuICogICBXaGV0aGVyIHRvIHN1cHBvcnQgc3RyaWtldGhyb3VnaCB3aXRoIGEgc2luZ2xlIHRpbGRlLlxuICpcbiAqICAgU2luZ2xlIHRpbGRlcyB3b3JrIG9uIGdpdGh1Yi5jb20sIGJ1dCBhcmUgdGVjaG5pY2FsbHkgcHJvaGliaXRlZCBieSB0aGVcbiAqICAgR0ZNIHNwZWMuXG4gKi9cblxuaW1wb3J0IHtvayBhcyBhc3NlcnR9IGZyb20gJ3V2dS9hc3NlcnQnXG5pbXBvcnQge3NwbGljZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2h1bmtlZCdcbmltcG9ydCB7Y2xhc3NpZnlDaGFyYWN0ZXJ9IGZyb20gJ21pY3JvbWFyay11dGlsLWNsYXNzaWZ5LWNoYXJhY3RlcidcbmltcG9ydCB7cmVzb2x2ZUFsbH0gZnJvbSAnbWljcm9tYXJrLXV0aWwtcmVzb2x2ZS1hbGwnXG5pbXBvcnQge2NvZGVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wvY29kZXMuanMnXG5pbXBvcnQge2NvbnN0YW50c30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL2NvbnN0YW50cy5qcydcbmltcG9ydCB7dHlwZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbC90eXBlcy5qcydcblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWljcm9tYXJrYCB0byBlbmFibGUgR0ZNIHN0cmlrZXRocm91Z2ggc3ludGF4LlxuICpcbiAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uLlxuICogQHJldHVybnMge0V4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWljcm9tYXJrYCB0aGF0IGNhbiBiZSBwYXNzZWQgaW4gYGV4dGVuc2lvbnNgLCB0b1xuICogICBlbmFibGUgR0ZNIHN0cmlrZXRocm91Z2ggc3ludGF4LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtU3RyaWtldGhyb3VnaChvcHRpb25zKSB7XG4gIGNvbnN0IG9wdGlvbnNfID0gb3B0aW9ucyB8fCB7fVxuICBsZXQgc2luZ2xlID0gb3B0aW9uc18uc2luZ2xlVGlsZGVcbiAgY29uc3QgdG9rZW5pemVyID0ge1xuICAgIHRva2VuaXplOiB0b2tlbml6ZVN0cmlrZXRocm91Z2gsXG4gICAgcmVzb2x2ZUFsbDogcmVzb2x2ZUFsbFN0cmlrZXRocm91Z2hcbiAgfVxuXG4gIGlmIChzaW5nbGUgPT09IG51bGwgfHwgc2luZ2xlID09PSB1bmRlZmluZWQpIHtcbiAgICBzaW5nbGUgPSB0cnVlXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRleHQ6IHtbY29kZXMudGlsZGVdOiB0b2tlbml6ZXJ9LFxuICAgIGluc2lkZVNwYW46IHtudWxsOiBbdG9rZW5pemVyXX0sXG4gICAgYXR0ZW50aW9uTWFya2Vyczoge251bGw6IFtjb2Rlcy50aWxkZV19XG4gIH1cblxuICAvKipcbiAgICogVGFrZSBldmVudHMgYW5kIHJlc29sdmUgc3RyaWtldGhyb3VnaC5cbiAgICpcbiAgICogQHR5cGUge1Jlc29sdmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVzb2x2ZUFsbFN0cmlrZXRocm91Z2goZXZlbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IGluZGV4ID0gLTFcblxuICAgIC8vIFdhbGsgdGhyb3VnaCBhbGwgZXZlbnRzLlxuICAgIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgICAgLy8gRmluZCBhIHRva2VuIHRoYXQgY2FuIGNsb3NlLlxuICAgICAgaWYgKFxuICAgICAgICBldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInICYmXG4gICAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZVRlbXBvcmFyeScgJiZcbiAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5fY2xvc2VcbiAgICAgICkge1xuICAgICAgICBsZXQgb3BlbiA9IGluZGV4XG5cbiAgICAgICAgLy8gTm93IHdhbGsgYmFjayB0byBmaW5kIGFuIG9wZW5lci5cbiAgICAgICAgd2hpbGUgKG9wZW4tLSkge1xuICAgICAgICAgIC8vIEZpbmQgYSB0b2tlbiB0aGF0IGNhbiBvcGVuIHRoZSBjbG9zZXIuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnRzW29wZW5dWzBdID09PSAnZXhpdCcgJiZcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS50eXBlID09PSAnc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5JyAmJlxuICAgICAgICAgICAgZXZlbnRzW29wZW5dWzFdLl9vcGVuICYmXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2l6ZXMgYXJlIHRoZSBzYW1lOlxuICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW2luZGV4XVsxXS5zdGFydC5vZmZzZXQgPT09XG4gICAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW29wZW5dWzFdLnN0YXJ0Lm9mZnNldFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZSdcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS50eXBlID0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZSdcblxuICAgICAgICAgICAgLyoqIEB0eXBlIHtUb2tlbn0gKi9cbiAgICAgICAgICAgIGNvbnN0IHN0cmlrZXRocm91Z2ggPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpa2V0aHJvdWdoJyxcbiAgICAgICAgICAgICAgc3RhcnQ6IE9iamVjdC5hc3NpZ24oe30sIGV2ZW50c1tvcGVuXVsxXS5zdGFydCksXG4gICAgICAgICAgICAgIGVuZDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW2luZGV4XVsxXS5lbmQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKiBAdHlwZSB7VG9rZW59ICovXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0ge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaWtldGhyb3VnaFRleHQnLFxuICAgICAgICAgICAgICBzdGFydDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW29wZW5dWzFdLmVuZCksXG4gICAgICAgICAgICAgIGVuZDogT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzW2luZGV4XVsxXS5zdGFydClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3BlbmluZy5cbiAgICAgICAgICAgIC8qKiBAdHlwZSB7QXJyYXk8RXZlbnQ+fSAqL1xuICAgICAgICAgICAgY29uc3QgbmV4dEV2ZW50cyA9IFtcbiAgICAgICAgICAgICAgWydlbnRlcicsIHN0cmlrZXRocm91Z2gsIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2VudGVyJywgZXZlbnRzW29wZW5dWzFdLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydleGl0JywgZXZlbnRzW29wZW5dWzFdLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydlbnRlcicsIHRleHQsIGNvbnRleHRdXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGNvbnN0IGluc2lkZVNwYW4gPSBjb250ZXh0LnBhcnNlci5jb25zdHJ1Y3RzLmluc2lkZVNwYW4ubnVsbFxuXG4gICAgICAgICAgICBpZiAoaW5zaWRlU3Bhbikge1xuICAgICAgICAgICAgICAvLyBCZXR3ZWVuLlxuICAgICAgICAgICAgICBzcGxpY2UoXG4gICAgICAgICAgICAgICAgbmV4dEV2ZW50cyxcbiAgICAgICAgICAgICAgICBuZXh0RXZlbnRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIHJlc29sdmVBbGwoaW5zaWRlU3BhbiwgZXZlbnRzLnNsaWNlKG9wZW4gKyAxLCBpbmRleCksIGNvbnRleHQpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2xvc2luZy5cbiAgICAgICAgICAgIHNwbGljZShuZXh0RXZlbnRzLCBuZXh0RXZlbnRzLmxlbmd0aCwgMCwgW1xuICAgICAgICAgICAgICBbJ2V4aXQnLCB0ZXh0LCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydlbnRlcicsIGV2ZW50c1tpbmRleF1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2V4aXQnLCBldmVudHNbaW5kZXhdWzFdLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydleGl0Jywgc3RyaWtldGhyb3VnaCwgY29udGV4dF1cbiAgICAgICAgICAgIF0pXG5cbiAgICAgICAgICAgIHNwbGljZShldmVudHMsIG9wZW4gLSAxLCBpbmRleCAtIG9wZW4gKyAzLCBuZXh0RXZlbnRzKVxuXG4gICAgICAgICAgICBpbmRleCA9IG9wZW4gKyBuZXh0RXZlbnRzLmxlbmd0aCAtIDJcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgICBpZiAoZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5Jykge1xuICAgICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPSB0eXBlcy5kYXRhXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZW50c1xuICB9XG5cbiAgLyoqXG4gICAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gICAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gICAqL1xuICBmdW5jdGlvbiB0b2tlbml6ZVN0cmlrZXRocm91Z2goZWZmZWN0cywgb2ssIG5vaykge1xuICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5wcmV2aW91c1xuICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuZXZlbnRzXG4gICAgbGV0IHNpemUgPSAwXG5cbiAgICByZXR1cm4gc3RhcnRcblxuICAgIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gICAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgICAgYXNzZXJ0KGNvZGUgPT09IGNvZGVzLnRpbGRlLCAnZXhwZWN0ZWQgYH5gJylcblxuICAgICAgaWYgKFxuICAgICAgICBwcmV2aW91cyA9PT0gY29kZXMudGlsZGUgJiZcbiAgICAgICAgZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAxXVsxXS50eXBlICE9PSB0eXBlcy5jaGFyYWN0ZXJFc2NhcGVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZVRlbXBvcmFyeScpXG4gICAgICByZXR1cm4gbW9yZShjb2RlKVxuICAgIH1cblxuICAgIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gICAgZnVuY3Rpb24gbW9yZShjb2RlKSB7XG4gICAgICBjb25zdCBiZWZvcmUgPSBjbGFzc2lmeUNoYXJhY3RlcihwcmV2aW91cylcblxuICAgICAgaWYgKGNvZGUgPT09IGNvZGVzLnRpbGRlKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgdGhlIHRoaXJkIG1hcmtlciwgZXhpdC5cbiAgICAgICAgaWYgKHNpemUgPiAxKSByZXR1cm4gbm9rKGNvZGUpXG4gICAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgICBzaXplKytcbiAgICAgICAgcmV0dXJuIG1vcmVcbiAgICAgIH1cblxuICAgICAgaWYgKHNpemUgPCAyICYmICFzaW5nbGUpIHJldHVybiBub2soY29kZSlcbiAgICAgIGNvbnN0IHRva2VuID0gZWZmZWN0cy5leGl0KCdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknKVxuICAgICAgY29uc3QgYWZ0ZXIgPSBjbGFzc2lmeUNoYXJhY3Rlcihjb2RlKVxuICAgICAgdG9rZW4uX29wZW4gPVxuICAgICAgICAhYWZ0ZXIgfHwgKGFmdGVyID09PSBjb25zdGFudHMuYXR0ZW50aW9uU2lkZUFmdGVyICYmIEJvb2xlYW4oYmVmb3JlKSlcbiAgICAgIHRva2VuLl9jbG9zZSA9XG4gICAgICAgICFiZWZvcmUgfHwgKGJlZm9yZSA9PT0gY29uc3RhbnRzLmF0dGVudGlvblNpZGVBZnRlciAmJiBCb29sZWFuKGFmdGVyKSlcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js\n");

/***/ })

};
;