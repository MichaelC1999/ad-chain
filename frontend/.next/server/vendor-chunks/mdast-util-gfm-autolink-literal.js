"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-autolink-literal";
exports.ids = ["vendor-chunks/mdast-util-gfm-autolink-literal"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-autolink-literal/lib/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-autolink-literal/lib/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmAutolinkLiteralFromMarkdown: () => (/* binding */ gfmAutolinkLiteralFromMarkdown),\n/* harmony export */   gfmAutolinkLiteralToMarkdown: () => (/* binding */ gfmAutolinkLiteralToMarkdown)\n/* harmony export */ });\n/* harmony import */ var ccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ccount */ \"(ssr)/./node_modules/ccount/index.js\");\n/* harmony import */ var mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-find-and-replace */ \"(ssr)/./node_modules/mdast-util-find-and-replace/lib/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-character */ \"(ssr)/./node_modules/micromark-util-character/dev/index.js\");\n/**\n * @typedef {import('mdast').Link} Link\n * @typedef {import('mdast').PhrasingContent} PhrasingContent\n *\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n * @typedef {import('mdast-util-from-markdown').Transform} FromMarkdownTransform\n *\n * @typedef {import('mdast-util-to-markdown').ConstructName} ConstructName\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n *\n * @typedef {import('mdast-util-find-and-replace').ReplaceFunction} ReplaceFunction\n * @typedef {import('mdast-util-find-and-replace').RegExpMatchObject} RegExpMatchObject\n */\n\n\n\n\n\n/** @type {ConstructName} */\nconst inConstruct = 'phrasing'\n/** @type {Array<ConstructName>} */\nconst notInConstruct = ['autolink', 'link', 'image', 'label']\n\n// To do: next major: expose functions instead of extensions.\n\n/**\n * Extension for `mdast-util-from-markdown` to enable GFM autolink literals.\n *\n * @type {FromMarkdownExtension}\n */\nconst gfmAutolinkLiteralFromMarkdown = {\n  transforms: [transformGfmAutolinkLiterals],\n  enter: {\n    literalAutolink: enterLiteralAutolink,\n    literalAutolinkEmail: enterLiteralAutolinkValue,\n    literalAutolinkHttp: enterLiteralAutolinkValue,\n    literalAutolinkWww: enterLiteralAutolinkValue\n  },\n  exit: {\n    literalAutolink: exitLiteralAutolink,\n    literalAutolinkEmail: exitLiteralAutolinkEmail,\n    literalAutolinkHttp: exitLiteralAutolinkHttp,\n    literalAutolinkWww: exitLiteralAutolinkWww\n  }\n}\n\n/**\n * Extension for `mdast-util-to-markdown` to enable GFM autolink literals.\n *\n * @type {ToMarkdownExtension}\n */\nconst gfmAutolinkLiteralToMarkdown = {\n  unsafe: [\n    {\n      character: '@',\n      before: '[+\\\\-.\\\\w]',\n      after: '[\\\\-.\\\\w]',\n      inConstruct,\n      notInConstruct\n    },\n    {\n      character: '.',\n      before: '[Ww]',\n      after: '[\\\\-.\\\\w]',\n      inConstruct,\n      notInConstruct\n    },\n    {character: ':', before: '[ps]', after: '\\\\/', inConstruct, notInConstruct}\n  ]\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterLiteralAutolink(token) {\n  this.enter({type: 'link', title: null, url: '', children: []}, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction enterLiteralAutolinkValue(token) {\n  this.config.enter.autolinkProtocol.call(this, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitLiteralAutolinkHttp(token) {\n  this.config.exit.autolinkProtocol.call(this, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitLiteralAutolinkWww(token) {\n  this.config.exit.data.call(this, token)\n  const node = /** @type {Link} */ (this.stack[this.stack.length - 1])\n  node.url = 'http://' + this.sliceSerialize(token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitLiteralAutolinkEmail(token) {\n  this.config.exit.autolinkEmail.call(this, token)\n}\n\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */\nfunction exitLiteralAutolink(token) {\n  this.exit(token)\n}\n\n/** @type {FromMarkdownTransform} */\nfunction transformGfmAutolinkLiterals(tree) {\n  (0,mdast_util_find_and_replace__WEBPACK_IMPORTED_MODULE_0__.findAndReplace)(\n    tree,\n    [\n      [/(https?:\\/\\/|www(?=\\.))([-.\\w]+)([^ \\t\\r\\n]*)/gi, findUrl],\n      [/([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)/g, findEmail]\n    ],\n    {ignore: ['link', 'linkReference']}\n  )\n}\n\n/**\n * @type {ReplaceFunction}\n * @param {string} _\n * @param {string} protocol\n * @param {string} domain\n * @param {string} path\n * @param {RegExpMatchObject} match\n * @returns {Link | Array<PhrasingContent> | false}\n */\n// eslint-disable-next-line max-params\nfunction findUrl(_, protocol, domain, path, match) {\n  let prefix = ''\n\n  // Not an expected previous character.\n  if (!previous(match)) {\n    return false\n  }\n\n  // Treat `www` as part of the domain.\n  if (/^w/i.test(protocol)) {\n    domain = protocol + domain\n    protocol = ''\n    prefix = 'http://'\n  }\n\n  if (!isCorrectDomain(domain)) {\n    return false\n  }\n\n  const parts = splitUrl(domain + path)\n\n  if (!parts[0]) return false\n\n  /** @type {Link} */\n  const result = {\n    type: 'link',\n    title: null,\n    url: prefix + protocol + parts[0],\n    children: [{type: 'text', value: protocol + parts[0]}]\n  }\n\n  if (parts[1]) {\n    return [result, {type: 'text', value: parts[1]}]\n  }\n\n  return result\n}\n\n/**\n * @type {ReplaceFunction}\n * @param {string} _\n * @param {string} atext\n * @param {string} label\n * @param {RegExpMatchObject} match\n * @returns {Link | false}\n */\nfunction findEmail(_, atext, label, match) {\n  if (\n    // Not an expected previous character.\n    !previous(match, true) ||\n    // Label ends in not allowed character.\n    /[-\\d_]$/.test(label)\n  ) {\n    return false\n  }\n\n  return {\n    type: 'link',\n    title: null,\n    url: 'mailto:' + atext + '@' + label,\n    children: [{type: 'text', value: atext + '@' + label}]\n  }\n}\n\n/**\n * @param {string} domain\n * @returns {boolean}\n */\nfunction isCorrectDomain(domain) {\n  const parts = domain.split('.')\n\n  if (\n    parts.length < 2 ||\n    (parts[parts.length - 1] &&\n      (/_/.test(parts[parts.length - 1]) ||\n        !/[a-zA-Z\\d]/.test(parts[parts.length - 1]))) ||\n    (parts[parts.length - 2] &&\n      (/_/.test(parts[parts.length - 2]) ||\n        !/[a-zA-Z\\d]/.test(parts[parts.length - 2])))\n  ) {\n    return false\n  }\n\n  return true\n}\n\n/**\n * @param {string} url\n * @returns {[string, string | undefined]}\n */\nfunction splitUrl(url) {\n  const trailExec = /[!\"&'),.:;<>?\\]}]+$/.exec(url)\n\n  if (!trailExec) {\n    return [url, undefined]\n  }\n\n  url = url.slice(0, trailExec.index)\n\n  let trail = trailExec[0]\n  let closingParenIndex = trail.indexOf(')')\n  const openingParens = (0,ccount__WEBPACK_IMPORTED_MODULE_1__.ccount)(url, '(')\n  let closingParens = (0,ccount__WEBPACK_IMPORTED_MODULE_1__.ccount)(url, ')')\n\n  while (closingParenIndex !== -1 && openingParens > closingParens) {\n    url += trail.slice(0, closingParenIndex + 1)\n    trail = trail.slice(closingParenIndex + 1)\n    closingParenIndex = trail.indexOf(')')\n    closingParens++\n  }\n\n  return [url, trail]\n}\n\n/**\n * @param {RegExpMatchObject} match\n * @param {boolean | null | undefined} [email=false]\n * @returns {boolean}\n */\nfunction previous(match, email) {\n  const code = match.input.charCodeAt(match.index - 1)\n\n  return (\n    (match.index === 0 ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.unicodeWhitespace)(code) ||\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.unicodePunctuation)(code)) &&\n    (!email || code !== 47)\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tYXV0b2xpbmstbGl0ZXJhbC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsaUNBQWlDO0FBQzlDO0FBQ0EsYUFBYSxtREFBbUQ7QUFDaEUsYUFBYSw4Q0FBOEM7QUFDM0QsYUFBYSwyQ0FBMkM7QUFDeEQsYUFBYSw4Q0FBOEM7QUFDM0Q7QUFDQSxhQUFhLGdEQUFnRDtBQUM3RCxhQUFhLDBDQUEwQztBQUN2RDtBQUNBLGFBQWEsdURBQXVEO0FBQ3BFLGFBQWEseURBQXlEO0FBQ3RFOztBQUU2QjtBQUM2QjtBQUNvQjs7QUFFOUUsV0FBVyxlQUFlO0FBQzFCO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQSxjQUFjLGlEQUFpRDtBQUMvRDs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTTtBQUNoQztBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQSxFQUFFLDJFQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlDQUF5QztBQUN6RDs7QUFFQTtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLG1CQUFtQjtBQUM5QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUNBQXlDO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTTs7QUFFckM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsOENBQU07QUFDOUIsc0JBQXNCLDhDQUFNOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsNEJBQTRCO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sMkVBQWlCO0FBQ3ZCLE1BQU0sNEVBQWtCO0FBQ3hCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tYXV0b2xpbmstbGl0ZXJhbC9saWIvaW5kZXguanM/MjgyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuTGlua30gTGlua1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5QaHJhc2luZ0NvbnRlbnR9IFBocmFzaW5nQ29udGVudFxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkNvbXBpbGVDb250ZXh0fSBDb21waWxlQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1mcm9tLW1hcmtkb3duJykuRXh0ZW5zaW9ufSBGcm9tTWFya2Rvd25FeHRlbnNpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkhhbmRsZX0gRnJvbU1hcmtkb3duSGFuZGxlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5UcmFuc2Zvcm19IEZyb21NYXJrZG93blRyYW5zZm9ybVxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5Db25zdHJ1Y3ROYW1lfSBDb25zdHJ1Y3ROYW1lXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuT3B0aW9uc30gVG9NYXJrZG93bkV4dGVuc2lvblxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZmluZC1hbmQtcmVwbGFjZScpLlJlcGxhY2VGdW5jdGlvbn0gUmVwbGFjZUZ1bmN0aW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZpbmQtYW5kLXJlcGxhY2UnKS5SZWdFeHBNYXRjaE9iamVjdH0gUmVnRXhwTWF0Y2hPYmplY3RcbiAqL1xuXG5pbXBvcnQge2Njb3VudH0gZnJvbSAnY2NvdW50J1xuaW1wb3J0IHtmaW5kQW5kUmVwbGFjZX0gZnJvbSAnbWRhc3QtdXRpbC1maW5kLWFuZC1yZXBsYWNlJ1xuaW1wb3J0IHt1bmljb2RlUHVuY3R1YXRpb24sIHVuaWNvZGVXaGl0ZXNwYWNlfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG5cbi8qKiBAdHlwZSB7Q29uc3RydWN0TmFtZX0gKi9cbmNvbnN0IGluQ29uc3RydWN0ID0gJ3BocmFzaW5nJ1xuLyoqIEB0eXBlIHtBcnJheTxDb25zdHJ1Y3ROYW1lPn0gKi9cbmNvbnN0IG5vdEluQ29uc3RydWN0ID0gWydhdXRvbGluaycsICdsaW5rJywgJ2ltYWdlJywgJ2xhYmVsJ11cblxuLy8gVG8gZG86IG5leHQgbWFqb3I6IGV4cG9zZSBmdW5jdGlvbnMgaW5zdGVhZCBvZiBleHRlbnNpb25zLlxuXG4vKipcbiAqIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSBhdXRvbGluayBsaXRlcmFscy5cbiAqXG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duRXh0ZW5zaW9ufVxuICovXG5leHBvcnQgY29uc3QgZ2ZtQXV0b2xpbmtMaXRlcmFsRnJvbU1hcmtkb3duID0ge1xuICB0cmFuc2Zvcm1zOiBbdHJhbnNmb3JtR2ZtQXV0b2xpbmtMaXRlcmFsc10sXG4gIGVudGVyOiB7XG4gICAgbGl0ZXJhbEF1dG9saW5rOiBlbnRlckxpdGVyYWxBdXRvbGluayxcbiAgICBsaXRlcmFsQXV0b2xpbmtFbWFpbDogZW50ZXJMaXRlcmFsQXV0b2xpbmtWYWx1ZSxcbiAgICBsaXRlcmFsQXV0b2xpbmtIdHRwOiBlbnRlckxpdGVyYWxBdXRvbGlua1ZhbHVlLFxuICAgIGxpdGVyYWxBdXRvbGlua1d3dzogZW50ZXJMaXRlcmFsQXV0b2xpbmtWYWx1ZVxuICB9LFxuICBleGl0OiB7XG4gICAgbGl0ZXJhbEF1dG9saW5rOiBleGl0TGl0ZXJhbEF1dG9saW5rLFxuICAgIGxpdGVyYWxBdXRvbGlua0VtYWlsOiBleGl0TGl0ZXJhbEF1dG9saW5rRW1haWwsXG4gICAgbGl0ZXJhbEF1dG9saW5rSHR0cDogZXhpdExpdGVyYWxBdXRvbGlua0h0dHAsXG4gICAgbGl0ZXJhbEF1dG9saW5rV3d3OiBleGl0TGl0ZXJhbEF1dG9saW5rV3d3XG4gIH1cbn1cblxuLyoqXG4gKiBFeHRlbnNpb24gZm9yIGBtZGFzdC11dGlsLXRvLW1hcmtkb3duYCB0byBlbmFibGUgR0ZNIGF1dG9saW5rIGxpdGVyYWxzLlxuICpcbiAqIEB0eXBlIHtUb01hcmtkb3duRXh0ZW5zaW9ufVxuICovXG5leHBvcnQgY29uc3QgZ2ZtQXV0b2xpbmtMaXRlcmFsVG9NYXJrZG93biA9IHtcbiAgdW5zYWZlOiBbXG4gICAge1xuICAgICAgY2hhcmFjdGVyOiAnQCcsXG4gICAgICBiZWZvcmU6ICdbK1xcXFwtLlxcXFx3XScsXG4gICAgICBhZnRlcjogJ1tcXFxcLS5cXFxcd10nLFxuICAgICAgaW5Db25zdHJ1Y3QsXG4gICAgICBub3RJbkNvbnN0cnVjdFxuICAgIH0sXG4gICAge1xuICAgICAgY2hhcmFjdGVyOiAnLicsXG4gICAgICBiZWZvcmU6ICdbV3ddJyxcbiAgICAgIGFmdGVyOiAnW1xcXFwtLlxcXFx3XScsXG4gICAgICBpbkNvbnN0cnVjdCxcbiAgICAgIG5vdEluQ29uc3RydWN0XG4gICAgfSxcbiAgICB7Y2hhcmFjdGVyOiAnOicsIGJlZm9yZTogJ1twc10nLCBhZnRlcjogJ1xcXFwvJywgaW5Db25zdHJ1Y3QsIG5vdEluQ29uc3RydWN0fVxuICBdXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZW50ZXJMaXRlcmFsQXV0b2xpbmsodG9rZW4pIHtcbiAgdGhpcy5lbnRlcih7dHlwZTogJ2xpbmsnLCB0aXRsZTogbnVsbCwgdXJsOiAnJywgY2hpbGRyZW46IFtdfSwgdG9rZW4pXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZW50ZXJMaXRlcmFsQXV0b2xpbmtWYWx1ZSh0b2tlbikge1xuICB0aGlzLmNvbmZpZy5lbnRlci5hdXRvbGlua1Byb3RvY29sLmNhbGwodGhpcywgdG9rZW4pXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdExpdGVyYWxBdXRvbGlua0h0dHAodG9rZW4pIHtcbiAgdGhpcy5jb25maWcuZXhpdC5hdXRvbGlua1Byb3RvY29sLmNhbGwodGhpcywgdG9rZW4pXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdExpdGVyYWxBdXRvbGlua1d3dyh0b2tlbikge1xuICB0aGlzLmNvbmZpZy5leGl0LmRhdGEuY2FsbCh0aGlzLCB0b2tlbilcbiAgY29uc3Qgbm9kZSA9IC8qKiBAdHlwZSB7TGlua30gKi8gKHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXSlcbiAgbm9kZS51cmwgPSAnaHR0cDovLycgKyB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGV4aXRMaXRlcmFsQXV0b2xpbmtFbWFpbCh0b2tlbikge1xuICB0aGlzLmNvbmZpZy5leGl0LmF1dG9saW5rRW1haWwuY2FsbCh0aGlzLCB0b2tlbilcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0TGl0ZXJhbEF1dG9saW5rKHRva2VuKSB7XG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cblxuLyoqIEB0eXBlIHtGcm9tTWFya2Rvd25UcmFuc2Zvcm19ICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1HZm1BdXRvbGlua0xpdGVyYWxzKHRyZWUpIHtcbiAgZmluZEFuZFJlcGxhY2UoXG4gICAgdHJlZSxcbiAgICBbXG4gICAgICBbLyhodHRwcz86XFwvXFwvfHd3dyg/PVxcLikpKFstLlxcd10rKShbXiBcXHRcXHJcXG5dKikvZ2ksIGZpbmRVcmxdLFxuICAgICAgWy8oWy0uXFx3K10rKUAoWy1cXHddKyg/OlxcLlstXFx3XSspKykvZywgZmluZEVtYWlsXVxuICAgIF0sXG4gICAge2lnbm9yZTogWydsaW5rJywgJ2xpbmtSZWZlcmVuY2UnXX1cbiAgKVxufVxuXG4vKipcbiAqIEB0eXBlIHtSZXBsYWNlRnVuY3Rpb259XG4gKiBAcGFyYW0ge3N0cmluZ30gX1xuICogQHBhcmFtIHtzdHJpbmd9IHByb3RvY29sXG4gKiBAcGFyYW0ge3N0cmluZ30gZG9tYWluXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHBhcmFtIHtSZWdFeHBNYXRjaE9iamVjdH0gbWF0Y2hcbiAqIEByZXR1cm5zIHtMaW5rIHwgQXJyYXk8UGhyYXNpbmdDb250ZW50PiB8IGZhbHNlfVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuZnVuY3Rpb24gZmluZFVybChfLCBwcm90b2NvbCwgZG9tYWluLCBwYXRoLCBtYXRjaCkge1xuICBsZXQgcHJlZml4ID0gJydcblxuICAvLyBOb3QgYW4gZXhwZWN0ZWQgcHJldmlvdXMgY2hhcmFjdGVyLlxuICBpZiAoIXByZXZpb3VzKG1hdGNoKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gVHJlYXQgYHd3d2AgYXMgcGFydCBvZiB0aGUgZG9tYWluLlxuICBpZiAoL153L2kudGVzdChwcm90b2NvbCkpIHtcbiAgICBkb21haW4gPSBwcm90b2NvbCArIGRvbWFpblxuICAgIHByb3RvY29sID0gJydcbiAgICBwcmVmaXggPSAnaHR0cDovLydcbiAgfVxuXG4gIGlmICghaXNDb3JyZWN0RG9tYWluKGRvbWFpbikpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IHBhcnRzID0gc3BsaXRVcmwoZG9tYWluICsgcGF0aClcblxuICBpZiAoIXBhcnRzWzBdKSByZXR1cm4gZmFsc2VcblxuICAvKiogQHR5cGUge0xpbmt9ICovXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICB0eXBlOiAnbGluaycsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdXJsOiBwcmVmaXggKyBwcm90b2NvbCArIHBhcnRzWzBdLFxuICAgIGNoaWxkcmVuOiBbe3R5cGU6ICd0ZXh0JywgdmFsdWU6IHByb3RvY29sICsgcGFydHNbMF19XVxuICB9XG5cbiAgaWYgKHBhcnRzWzFdKSB7XG4gICAgcmV0dXJuIFtyZXN1bHQsIHt0eXBlOiAndGV4dCcsIHZhbHVlOiBwYXJ0c1sxXX1dXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogQHR5cGUge1JlcGxhY2VGdW5jdGlvbn1cbiAqIEBwYXJhbSB7c3RyaW5nfSBfXG4gKiBAcGFyYW0ge3N0cmluZ30gYXRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFxuICogQHBhcmFtIHtSZWdFeHBNYXRjaE9iamVjdH0gbWF0Y2hcbiAqIEByZXR1cm5zIHtMaW5rIHwgZmFsc2V9XG4gKi9cbmZ1bmN0aW9uIGZpbmRFbWFpbChfLCBhdGV4dCwgbGFiZWwsIG1hdGNoKSB7XG4gIGlmIChcbiAgICAvLyBOb3QgYW4gZXhwZWN0ZWQgcHJldmlvdXMgY2hhcmFjdGVyLlxuICAgICFwcmV2aW91cyhtYXRjaCwgdHJ1ZSkgfHxcbiAgICAvLyBMYWJlbCBlbmRzIGluIG5vdCBhbGxvd2VkIGNoYXJhY3Rlci5cbiAgICAvWy1cXGRfXSQvLnRlc3QobGFiZWwpXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnbGluaycsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdXJsOiAnbWFpbHRvOicgKyBhdGV4dCArICdAJyArIGxhYmVsLFxuICAgIGNoaWxkcmVuOiBbe3R5cGU6ICd0ZXh0JywgdmFsdWU6IGF0ZXh0ICsgJ0AnICsgbGFiZWx9XVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGRvbWFpblxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQ29ycmVjdERvbWFpbihkb21haW4pIHtcbiAgY29uc3QgcGFydHMgPSBkb21haW4uc3BsaXQoJy4nKVxuXG4gIGlmIChcbiAgICBwYXJ0cy5sZW5ndGggPCAyIHx8XG4gICAgKHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdICYmXG4gICAgICAoL18vLnRlc3QocGFydHNbcGFydHMubGVuZ3RoIC0gMV0pIHx8XG4gICAgICAgICEvW2EtekEtWlxcZF0vLnRlc3QocGFydHNbcGFydHMubGVuZ3RoIC0gMV0pKSkgfHxcbiAgICAocGFydHNbcGFydHMubGVuZ3RoIC0gMl0gJiZcbiAgICAgICgvXy8udGVzdChwYXJ0c1twYXJ0cy5sZW5ndGggLSAyXSkgfHxcbiAgICAgICAgIS9bYS16QS1aXFxkXS8udGVzdChwYXJ0c1twYXJ0cy5sZW5ndGggLSAyXSkpKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge1tzdHJpbmcsIHN0cmluZyB8IHVuZGVmaW5lZF19XG4gKi9cbmZ1bmN0aW9uIHNwbGl0VXJsKHVybCkge1xuICBjb25zdCB0cmFpbEV4ZWMgPSAvWyFcIiYnKSwuOjs8Pj9cXF19XSskLy5leGVjKHVybClcblxuICBpZiAoIXRyYWlsRXhlYykge1xuICAgIHJldHVybiBbdXJsLCB1bmRlZmluZWRdXG4gIH1cblxuICB1cmwgPSB1cmwuc2xpY2UoMCwgdHJhaWxFeGVjLmluZGV4KVxuXG4gIGxldCB0cmFpbCA9IHRyYWlsRXhlY1swXVxuICBsZXQgY2xvc2luZ1BhcmVuSW5kZXggPSB0cmFpbC5pbmRleE9mKCcpJylcbiAgY29uc3Qgb3BlbmluZ1BhcmVucyA9IGNjb3VudCh1cmwsICcoJylcbiAgbGV0IGNsb3NpbmdQYXJlbnMgPSBjY291bnQodXJsLCAnKScpXG5cbiAgd2hpbGUgKGNsb3NpbmdQYXJlbkluZGV4ICE9PSAtMSAmJiBvcGVuaW5nUGFyZW5zID4gY2xvc2luZ1BhcmVucykge1xuICAgIHVybCArPSB0cmFpbC5zbGljZSgwLCBjbG9zaW5nUGFyZW5JbmRleCArIDEpXG4gICAgdHJhaWwgPSB0cmFpbC5zbGljZShjbG9zaW5nUGFyZW5JbmRleCArIDEpXG4gICAgY2xvc2luZ1BhcmVuSW5kZXggPSB0cmFpbC5pbmRleE9mKCcpJylcbiAgICBjbG9zaW5nUGFyZW5zKytcbiAgfVxuXG4gIHJldHVybiBbdXJsLCB0cmFpbF1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1JlZ0V4cE1hdGNoT2JqZWN0fSBtYXRjaFxuICogQHBhcmFtIHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2VtYWlsPWZhbHNlXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHByZXZpb3VzKG1hdGNoLCBlbWFpbCkge1xuICBjb25zdCBjb2RlID0gbWF0Y2guaW5wdXQuY2hhckNvZGVBdChtYXRjaC5pbmRleCAtIDEpXG5cbiAgcmV0dXJuIChcbiAgICAobWF0Y2guaW5kZXggPT09IDAgfHxcbiAgICAgIHVuaWNvZGVXaGl0ZXNwYWNlKGNvZGUpIHx8XG4gICAgICB1bmljb2RlUHVuY3R1YXRpb24oY29kZSkpICYmXG4gICAgKCFlbWFpbCB8fCBjb2RlICE9PSA0NylcbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-autolink-literal/lib/index.js\n");

/***/ })

};
;