"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-overlays";
exports.ids = ["vendor-chunks/react-overlays"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-overlays/cjs/ownerDocument.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-overlays/cjs/ownerDocument.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports[\"default\"] = void 0;\n\nvar _ownerDocument = _interopRequireDefault(__webpack_require__(/*! dom-helpers/ownerDocument */ \"(ssr)/./node_modules/dom-helpers/cjs/ownerDocument.js\"));\n\nvar _safeFindDOMNode = _interopRequireDefault(__webpack_require__(/*! ./safeFindDOMNode */ \"(ssr)/./node_modules/react-overlays/cjs/safeFindDOMNode.js\"));\n\nvar _default = function _default(componentOrElement) {\n  return (0, _ownerDocument[\"default\"])((0, _safeFindDOMNode[\"default\"])(componentOrElement));\n};\n\nexports[\"default\"] = _default;\nmodule.exports = exports.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtb3ZlcmxheXMvY2pzL293bmVyRG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsMEhBQThDOztBQUVuRixrQkFBa0I7QUFDbEIsa0JBQWtCOztBQUVsQiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBMkI7O0FBRS9FLDhDQUE4QyxtQkFBTyxDQUFDLHFGQUFtQjs7QUFFekU7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjtBQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvcmVhY3Qtb3ZlcmxheXMvY2pzL293bmVyRG9jdW1lbnQuanM/MjRjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9vd25lckRvY3VtZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZG9tLWhlbHBlcnMvb3duZXJEb2N1bWVudFwiKSk7XG5cbnZhciBfc2FmZUZpbmRET01Ob2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zYWZlRmluZERPTU5vZGVcIikpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChjb21wb25lbnRPckVsZW1lbnQpIHtcbiAgcmV0dXJuICgwLCBfb3duZXJEb2N1bWVudFtcImRlZmF1bHRcIl0pKCgwLCBfc2FmZUZpbmRET01Ob2RlW1wiZGVmYXVsdFwiXSkoY29tcG9uZW50T3JFbGVtZW50KSk7XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-overlays/cjs/ownerDocument.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-overlays/cjs/safeFindDOMNode.js":
/*!************************************************************!*\
  !*** ./node_modules/react-overlays/cjs/safeFindDOMNode.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports[\"default\"] = safeFindDOMNode;\n\nvar _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\"));\n\nfunction safeFindDOMNode(componentOrElement) {\n  if (componentOrElement && 'setState' in componentOrElement) {\n    return _reactDom[\"default\"].findDOMNode(componentOrElement);\n  }\n\n  return componentOrElement != null ? componentOrElement : null;\n}\n\nmodule.exports = exports.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtb3ZlcmxheXMvY2pzL3NhZmVGaW5kRE9NTm9kZS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQywwSEFBOEM7O0FBRW5GLGtCQUFrQjtBQUNsQixrQkFBa0I7O0FBRWxCLHVDQUF1QyxtQkFBTyxDQUFDLGdIQUFXOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy9yZWFjdC1vdmVybGF5cy9janMvc2FmZUZpbmRET01Ob2RlLmpzP2ViNmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBzYWZlRmluZERPTU5vZGU7XG5cbnZhciBfcmVhY3REb20gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb21cIikpO1xuXG5mdW5jdGlvbiBzYWZlRmluZERPTU5vZGUoY29tcG9uZW50T3JFbGVtZW50KSB7XG4gIGlmIChjb21wb25lbnRPckVsZW1lbnQgJiYgJ3NldFN0YXRlJyBpbiBjb21wb25lbnRPckVsZW1lbnQpIHtcbiAgICByZXR1cm4gX3JlYWN0RG9tW1wiZGVmYXVsdFwiXS5maW5kRE9NTm9kZShjb21wb25lbnRPckVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBvbmVudE9yRWxlbWVudCAhPSBudWxsID8gY29tcG9uZW50T3JFbGVtZW50IDogbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-overlays/cjs/safeFindDOMNode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-overlays/cjs/useRootClose.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-overlays/cjs/useRootClose.js ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"(ssr)/./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports[\"default\"] = void 0;\n\nvar _contains = _interopRequireDefault(__webpack_require__(/*! dom-helpers/contains */ \"(ssr)/./node_modules/dom-helpers/cjs/contains.js\"));\n\nvar _listen = _interopRequireDefault(__webpack_require__(/*! dom-helpers/listen */ \"(ssr)/./node_modules/dom-helpers/cjs/listen.js\"));\n\nvar _react = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nvar _useEventCallback = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useEventCallback */ \"(ssr)/./node_modules/@restart/hooks/cjs/useEventCallback.js\"));\n\nvar _warning = _interopRequireDefault(__webpack_require__(/*! warning */ \"(ssr)/./node_modules/warning/warning.js\"));\n\nvar _ownerDocument = _interopRequireDefault(__webpack_require__(/*! ./ownerDocument */ \"(ssr)/./node_modules/react-overlays/cjs/ownerDocument.js\"));\n\nvar escapeKeyCode = 27;\n\nvar noop = function noop() {};\n\nfunction isLeftClickEvent(event) {\n  return event.button === 0;\n}\n\nfunction isModifiedEvent(event) {\n  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);\n}\n\nvar getRefTarget = function getRefTarget(ref) {\n  return ref && ('current' in ref ? ref.current : ref);\n};\n\n/**\n * The `useRootClose` hook registers your callback on the document\n * when rendered. Powers the `<Overlay/>` component. This is used achieve modal\n * style behavior where your callback is triggered when the user tries to\n * interact with the rest of the document or hits the `esc` key.\n *\n * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary\n * @param {function} onRootClose\n * @param {object=}  options\n * @param {boolean=} options.disabled\n * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on\n */\nfunction useRootClose(ref, onRootClose, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      disabled = _ref.disabled,\n      _ref$clickTrigger = _ref.clickTrigger,\n      clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;\n\n  var preventMouseRootCloseRef = (0, _react.useRef)(false);\n  var onClose = onRootClose || noop;\n  var handleMouseCapture = (0, _react.useCallback)(function (e) {\n    var _e$composedPath$;\n\n    var currentTarget = getRefTarget(ref);\n    (0, _warning[\"default\"])(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');\n    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!(0, _contains[\"default\"])(currentTarget, (_e$composedPath$ = e.composedPath == null ? void 0 : e.composedPath()[0]) != null ? _e$composedPath$ : e.target);\n  }, [ref]);\n  var handleMouse = (0, _useEventCallback[\"default\"])(function (e) {\n    if (!preventMouseRootCloseRef.current) {\n      onClose(e);\n    }\n  });\n  var handleKeyUp = (0, _useEventCallback[\"default\"])(function (e) {\n    if (e.keyCode === escapeKeyCode) {\n      onClose(e);\n    }\n  });\n  (0, _react.useEffect)(function () {\n    if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately\n    // https://github.com/facebook/react/issues/20074\n\n    var currentEvent = window.event;\n    var doc = (0, _ownerDocument[\"default\"])(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to\n    // avoid false positives in the contains() check below if the target DOM\n    // element is removed in the React mouse callback.\n\n    var removeMouseCaptureListener = (0, _listen[\"default\"])(doc, clickTrigger, handleMouseCapture, true);\n    var removeMouseListener = (0, _listen[\"default\"])(doc, clickTrigger, function (e) {\n      // skip if this event is the same as the one running when we added the handlers\n      if (e === currentEvent) {\n        currentEvent = undefined;\n        return;\n      }\n\n      handleMouse(e);\n    });\n    var removeKeyupListener = (0, _listen[\"default\"])(doc, 'keyup', function (e) {\n      // skip if this event is the same as the one running when we added the handlers\n      if (e === currentEvent) {\n        currentEvent = undefined;\n        return;\n      }\n\n      handleKeyUp(e);\n    });\n    var mobileSafariHackListeners = [];\n\n    if ('ontouchstart' in doc.documentElement) {\n      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function (el) {\n        return (0, _listen[\"default\"])(el, 'mousemove', noop);\n      });\n    }\n\n    return function () {\n      removeMouseCaptureListener();\n      removeMouseListener();\n      removeKeyupListener();\n      mobileSafariHackListeners.forEach(function (remove) {\n        return remove();\n      });\n    };\n  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);\n}\n\nvar _default = useRootClose;\nexports[\"default\"] = _default;\nmodule.exports = exports.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtb3ZlcmxheXMvY2pzL3VzZVJvb3RDbG9zZS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQywwSEFBOEM7O0FBRW5GLGtCQUFrQjtBQUNsQixrQkFBa0I7O0FBRWxCLHVDQUF1QyxtQkFBTyxDQUFDLDhFQUFzQjs7QUFFckUscUNBQXFDLG1CQUFPLENBQUMsMEVBQW9COztBQUVqRSxhQUFhLG1CQUFPLENBQUMsd0dBQU87O0FBRTVCLCtDQUErQyxtQkFBTyxDQUFDLG9HQUFpQzs7QUFFeEYsc0NBQXNDLG1CQUFPLENBQUMsd0RBQVM7O0FBRXZELDRDQUE0QyxtQkFBTyxDQUFDLGlGQUFpQjs7QUFFckU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywrQkFBK0I7QUFDMUMsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsVUFBVTtBQUNyQixXQUFXLFVBQVU7QUFDckIsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1EQUFtRDtBQUNuRDs7QUFFQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy9yZWFjdC1vdmVybGF5cy9janMvdXNlUm9vdENsb3NlLmpzPzVlOWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfY29udGFpbnMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy9jb250YWluc1wiKSk7XG5cbnZhciBfbGlzdGVuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZG9tLWhlbHBlcnMvbGlzdGVuXCIpKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF91c2VFdmVudENhbGxiYWNrID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFja1wiKSk7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIndhcm5pbmdcIikpO1xuXG52YXIgX293bmVyRG9jdW1lbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL293bmVyRG9jdW1lbnRcIikpO1xuXG52YXIgZXNjYXBlS2V5Q29kZSA9IDI3O1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG52YXIgZ2V0UmVmVGFyZ2V0ID0gZnVuY3Rpb24gZ2V0UmVmVGFyZ2V0KHJlZikge1xuICByZXR1cm4gcmVmICYmICgnY3VycmVudCcgaW4gcmVmID8gcmVmLmN1cnJlbnQgOiByZWYpO1xufTtcblxuLyoqXG4gKiBUaGUgYHVzZVJvb3RDbG9zZWAgaG9vayByZWdpc3RlcnMgeW91ciBjYWxsYmFjayBvbiB0aGUgZG9jdW1lbnRcbiAqIHdoZW4gcmVuZGVyZWQuIFBvd2VycyB0aGUgYDxPdmVybGF5Lz5gIGNvbXBvbmVudC4gVGhpcyBpcyB1c2VkIGFjaGlldmUgbW9kYWxcbiAqIHN0eWxlIGJlaGF2aW9yIHdoZXJlIHlvdXIgY2FsbGJhY2sgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHVzZXIgdHJpZXMgdG9cbiAqIGludGVyYWN0IHdpdGggdGhlIHJlc3Qgb2YgdGhlIGRvY3VtZW50IG9yIGhpdHMgdGhlIGBlc2NgIGtleS5cbiAqXG4gKiBAcGFyYW0ge1JlZjxIVE1MRWxlbWVudD58IEhUTUxFbGVtZW50fSByZWYgIFRoZSBlbGVtZW50IGJvdW5kYXJ5XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblJvb3RDbG9zZVxuICogQHBhcmFtIHtvYmplY3Q9fSAgb3B0aW9uc1xuICogQHBhcmFtIHtib29sZWFuPX0gb3B0aW9ucy5kaXNhYmxlZFxuICogQHBhcmFtIHtzdHJpbmc9fSAgb3B0aW9ucy5jbGlja1RyaWdnZXIgVGhlIERPTSBldmVudCBuYW1lIChjbGljaywgbW91c2Vkb3duLCBldGMpIHRvIGF0dGFjaCBsaXN0ZW5lcnMgb25cbiAqL1xuZnVuY3Rpb24gdXNlUm9vdENsb3NlKHJlZiwgb25Sb290Q2xvc2UsIF90ZW1wKSB7XG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBfcmVmJGNsaWNrVHJpZ2dlciA9IF9yZWYuY2xpY2tUcmlnZ2VyLFxuICAgICAgY2xpY2tUcmlnZ2VyID0gX3JlZiRjbGlja1RyaWdnZXIgPT09IHZvaWQgMCA/ICdjbGljaycgOiBfcmVmJGNsaWNrVHJpZ2dlcjtcblxuICB2YXIgcHJldmVudE1vdXNlUm9vdENsb3NlUmVmID0gKDAsIF9yZWFjdC51c2VSZWYpKGZhbHNlKTtcbiAgdmFyIG9uQ2xvc2UgPSBvblJvb3RDbG9zZSB8fCBub29wO1xuICB2YXIgaGFuZGxlTW91c2VDYXB0dXJlID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgX2UkY29tcG9zZWRQYXRoJDtcblxuICAgIHZhciBjdXJyZW50VGFyZ2V0ID0gZ2V0UmVmVGFyZ2V0KHJlZik7XG4gICAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkoISFjdXJyZW50VGFyZ2V0LCAnUm9vdENsb3NlIGNhcHR1cmVkIGEgY2xvc2UgZXZlbnQgYnV0IGRvZXMgbm90IGhhdmUgYSByZWYgdG8gY29tcGFyZSBpdCB0by4gJyArICd1c2VSb290Q2xvc2UoKSwgc2hvdWxkIGJlIHBhc3NlZCBhIHJlZiB0aGF0IHJlc29sdmVzIHRvIGEgRE9NIG5vZGUnKTtcbiAgICBwcmV2ZW50TW91c2VSb290Q2xvc2VSZWYuY3VycmVudCA9ICFjdXJyZW50VGFyZ2V0IHx8IGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMZWZ0Q2xpY2tFdmVudChlKSB8fCAhISgwLCBfY29udGFpbnNbXCJkZWZhdWx0XCJdKShjdXJyZW50VGFyZ2V0LCAoX2UkY29tcG9zZWRQYXRoJCA9IGUuY29tcG9zZWRQYXRoID09IG51bGwgPyB2b2lkIDAgOiBlLmNvbXBvc2VkUGF0aCgpWzBdKSAhPSBudWxsID8gX2UkY29tcG9zZWRQYXRoJCA6IGUudGFyZ2V0KTtcbiAgfSwgW3JlZl0pO1xuICB2YXIgaGFuZGxlTW91c2UgPSAoMCwgX3VzZUV2ZW50Q2FsbGJhY2tbXCJkZWZhdWx0XCJdKShmdW5jdGlvbiAoZSkge1xuICAgIGlmICghcHJldmVudE1vdXNlUm9vdENsb3NlUmVmLmN1cnJlbnQpIHtcbiAgICAgIG9uQ2xvc2UoZSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUtleVVwID0gKDAsIF91c2VFdmVudENhbGxiYWNrW1wiZGVmYXVsdFwiXSkoZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBlc2NhcGVLZXlDb2RlKSB7XG4gICAgICBvbkNsb3NlKGUpO1xuICAgIH1cbiAgfSk7XG4gICgwLCBfcmVhY3QudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRpc2FibGVkIHx8IHJlZiA9PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkOyAvLyBTdG9yZSB0aGUgY3VycmVudCBldmVudCB0byBhdm9pZCB0cmlnZ2VyaW5nIGhhbmRsZXJzIGltbWVkaWF0ZWx5XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8yMDA3NFxuXG4gICAgdmFyIGN1cnJlbnRFdmVudCA9IHdpbmRvdy5ldmVudDtcbiAgICB2YXIgZG9jID0gKDAsIF9vd25lckRvY3VtZW50W1wiZGVmYXVsdFwiXSkoZ2V0UmVmVGFyZ2V0KHJlZikpOyAvLyBVc2UgY2FwdHVyZSBmb3IgdGhpcyBsaXN0ZW5lciBzbyBpdCBmaXJlcyBiZWZvcmUgUmVhY3QncyBsaXN0ZW5lciwgdG9cbiAgICAvLyBhdm9pZCBmYWxzZSBwb3NpdGl2ZXMgaW4gdGhlIGNvbnRhaW5zKCkgY2hlY2sgYmVsb3cgaWYgdGhlIHRhcmdldCBET01cbiAgICAvLyBlbGVtZW50IGlzIHJlbW92ZWQgaW4gdGhlIFJlYWN0IG1vdXNlIGNhbGxiYWNrLlxuXG4gICAgdmFyIHJlbW92ZU1vdXNlQ2FwdHVyZUxpc3RlbmVyID0gKDAsIF9saXN0ZW5bXCJkZWZhdWx0XCJdKShkb2MsIGNsaWNrVHJpZ2dlciwgaGFuZGxlTW91c2VDYXB0dXJlLCB0cnVlKTtcbiAgICB2YXIgcmVtb3ZlTW91c2VMaXN0ZW5lciA9ICgwLCBfbGlzdGVuW1wiZGVmYXVsdFwiXSkoZG9jLCBjbGlja1RyaWdnZXIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBza2lwIGlmIHRoaXMgZXZlbnQgaXMgdGhlIHNhbWUgYXMgdGhlIG9uZSBydW5uaW5nIHdoZW4gd2UgYWRkZWQgdGhlIGhhbmRsZXJzXG4gICAgICBpZiAoZSA9PT0gY3VycmVudEV2ZW50KSB7XG4gICAgICAgIGN1cnJlbnRFdmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVNb3VzZShlKTtcbiAgICB9KTtcbiAgICB2YXIgcmVtb3ZlS2V5dXBMaXN0ZW5lciA9ICgwLCBfbGlzdGVuW1wiZGVmYXVsdFwiXSkoZG9jLCAna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gc2tpcCBpZiB0aGlzIGV2ZW50IGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgcnVubmluZyB3aGVuIHdlIGFkZGVkIHRoZSBoYW5kbGVyc1xuICAgICAgaWYgKGUgPT09IGN1cnJlbnRFdmVudCkge1xuICAgICAgICBjdXJyZW50RXZlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlS2V5VXAoZSk7XG4gICAgfSk7XG4gICAgdmFyIG1vYmlsZVNhZmFyaUhhY2tMaXN0ZW5lcnMgPSBbXTtcblxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2MuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBtb2JpbGVTYWZhcmlIYWNrTGlzdGVuZXJzID0gW10uc2xpY2UuY2FsbChkb2MuYm9keS5jaGlsZHJlbikubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gKDAsIF9saXN0ZW5bXCJkZWZhdWx0XCJdKShlbCwgJ21vdXNlbW92ZScsIG5vb3ApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZU1vdXNlQ2FwdHVyZUxpc3RlbmVyKCk7XG4gICAgICByZW1vdmVNb3VzZUxpc3RlbmVyKCk7XG4gICAgICByZW1vdmVLZXl1cExpc3RlbmVyKCk7XG4gICAgICBtb2JpbGVTYWZhcmlIYWNrTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlbW92ZSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbcmVmLCBkaXNhYmxlZCwgY2xpY2tUcmlnZ2VyLCBoYW5kbGVNb3VzZUNhcHR1cmUsIGhhbmRsZU1vdXNlLCBoYW5kbGVLZXlVcF0pO1xufVxuXG52YXIgX2RlZmF1bHQgPSB1c2VSb290Q2xvc2U7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-overlays/cjs/useRootClose.js\n");

/***/ })

};
;