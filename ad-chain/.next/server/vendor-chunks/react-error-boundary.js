"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-error-boundary";
exports.ids = ["vendor-chunks/react-error-boundary"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-error-boundary/dist/react-error-boundary.cjs.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-error-boundary/dist/react-error-boundary.cjs.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar _inheritsLoose = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ \"(ssr)/./node_modules/@babel/runtime/helpers/inheritsLoose.js\");\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\nfunction _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }\n\nfunction _interopNamespace(e) {\n  if (e && e.__esModule) return e;\n  var n = Object.create(null);\n  if (e) {\n    Object.keys(e).forEach(function (k) {\n      if (k !== 'default') {\n        var d = Object.getOwnPropertyDescriptor(e, k);\n        Object.defineProperty(n, k, d.get ? d : {\n          enumerable: true,\n          get: function () { return e[k]; }\n        });\n      }\n    });\n  }\n  n[\"default\"] = e;\n  return Object.freeze(n);\n}\n\nvar _inheritsLoose__default = /*#__PURE__*/_interopDefaultLegacy(_inheritsLoose);\nvar React__namespace = /*#__PURE__*/_interopNamespace(React);\n\nvar changedArray = function changedArray(a, b) {\n  if (a === void 0) {\n    a = [];\n  }\n\n  if (b === void 0) {\n    b = [];\n  }\n\n  return a.length !== b.length || a.some(function (item, index) {\n    return !Object.is(item, b[index]);\n  });\n};\n\nvar initialState = {\n  error: null\n};\n\nvar ErrorBoundary = /*#__PURE__*/function (_React$Component) {\n  _inheritsLoose__default[\"default\"](ErrorBoundary, _React$Component);\n\n  function ErrorBoundary() {\n    var _this;\n\n    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {\n      _args[_key] = arguments[_key];\n    }\n\n    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;\n    _this.state = initialState;\n\n    _this.resetErrorBoundary = function () {\n      var _this$props;\n\n      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n\n      _this.props.onReset == null ? void 0 : (_this$props = _this.props).onReset.apply(_this$props, args);\n\n      _this.reset();\n    };\n\n    return _this;\n  }\n\n  ErrorBoundary.getDerivedStateFromError = function getDerivedStateFromError(error) {\n    return {\n      error: error\n    };\n  };\n\n  var _proto = ErrorBoundary.prototype;\n\n  _proto.reset = function reset() {\n    this.setState(initialState);\n  };\n\n  _proto.componentDidCatch = function componentDidCatch(error, info) {\n    var _this$props$onError, _this$props2;\n\n    (_this$props$onError = (_this$props2 = this.props).onError) == null ? void 0 : _this$props$onError.call(_this$props2, error, info);\n  };\n\n  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {\n    var error = this.state.error;\n    var resetKeys = this.props.resetKeys; // There's an edge case where if the thing that triggered the error\n    // happens to *also* be in the resetKeys array, we'd end up resetting\n    // the error boundary immediately. This would likely trigger a second\n    // error to be thrown.\n    // So we make sure that we don't check the resetKeys on the first call\n    // of cDU after the error is set\n\n    if (error !== null && prevState.error !== null && changedArray(prevProps.resetKeys, resetKeys)) {\n      var _this$props$onResetKe, _this$props3;\n\n      (_this$props$onResetKe = (_this$props3 = this.props).onResetKeysChange) == null ? void 0 : _this$props$onResetKe.call(_this$props3, prevProps.resetKeys, resetKeys);\n      this.reset();\n    }\n  };\n\n  _proto.render = function render() {\n    var error = this.state.error;\n    var _this$props4 = this.props,\n        fallbackRender = _this$props4.fallbackRender,\n        FallbackComponent = _this$props4.FallbackComponent,\n        fallback = _this$props4.fallback;\n\n    if (error !== null) {\n      var _props = {\n        error: error,\n        resetErrorBoundary: this.resetErrorBoundary\n      };\n\n      if ( /*#__PURE__*/React__namespace.isValidElement(fallback)) {\n        return fallback;\n      } else if (typeof fallbackRender === 'function') {\n        return fallbackRender(_props);\n      } else if (FallbackComponent) {\n        return /*#__PURE__*/React__namespace.createElement(FallbackComponent, _props);\n      } else {\n        throw new Error('react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop');\n      }\n    }\n\n    return this.props.children;\n  };\n\n  return ErrorBoundary;\n}(React__namespace.Component);\n\nfunction withErrorBoundary(Component, errorBoundaryProps) {\n  var Wrapped = function Wrapped(props) {\n    return /*#__PURE__*/React__namespace.createElement(ErrorBoundary, errorBoundaryProps, /*#__PURE__*/React__namespace.createElement(Component, props));\n  }; // Format for display in DevTools\n\n\n  var name = Component.displayName || Component.name || 'Unknown';\n  Wrapped.displayName = \"withErrorBoundary(\" + name + \")\";\n  return Wrapped;\n}\n\nfunction useErrorHandler(givenError) {\n  var _React$useState = React__namespace.useState(null),\n      error = _React$useState[0],\n      setError = _React$useState[1];\n\n  if (givenError != null) throw givenError;\n  if (error != null) throw error;\n  return setError;\n}\n/*\neslint\n  @typescript-eslint/sort-type-union-intersection-members: \"off\",\n  @typescript-eslint/no-throw-literal: \"off\",\n  @typescript-eslint/prefer-nullish-coalescing: \"off\"\n*/\n\nexports.ErrorBoundary = ErrorBoundary;\nexports.useErrorHandler = useErrorHandler;\nexports.withErrorBoundary = withErrorBoundary;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZXJyb3ItYm91bmRhcnkvZGlzdC9yZWFjdC1lcnJvci1ib3VuZGFyeS5janMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxxQkFBcUIsbUJBQU8sQ0FBQywwR0FBc0M7QUFDbkUsWUFBWSxtQkFBTyxDQUFDLHdHQUFPOztBQUUzQixxQ0FBcUMsNERBQTREOztBQUVqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5RUFBeUUsYUFBYTtBQUN0RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2RUFBNkUsZUFBZTtBQUM1RjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2Qix5QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWVycm9yLWJvdW5kYXJ5L2Rpc3QvcmVhY3QtZXJyb3ItYm91bmRhcnkuY2pzLmpzPzk5OGQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgX2luaGVyaXRzTG9vc2UgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2UnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdExlZ2FjeSAoZSkgeyByZXR1cm4gZSAmJiB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcE5hbWVzcGFjZShlKSB7XG4gIGlmIChlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gIHZhciBuID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKGUpIHtcbiAgICBPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICBpZiAoayAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHZhciBkID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCBrKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIGssIGQuZ2V0ID8gZCA6IHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZVtrXTsgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBuW1wiZGVmYXVsdFwiXSA9IGU7XG4gIHJldHVybiBPYmplY3QuZnJlZXplKG4pO1xufVxuXG52YXIgX2luaGVyaXRzTG9vc2VfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0TGVnYWN5KF9pbmhlcml0c0xvb3NlKTtcbnZhciBSZWFjdF9fbmFtZXNwYWNlID0gLyojX19QVVJFX18qL19pbnRlcm9wTmFtZXNwYWNlKFJlYWN0KTtcblxudmFyIGNoYW5nZWRBcnJheSA9IGZ1bmN0aW9uIGNoYW5nZWRBcnJheShhLCBiKSB7XG4gIGlmIChhID09PSB2b2lkIDApIHtcbiAgICBhID0gW107XG4gIH1cblxuICBpZiAoYiA9PT0gdm9pZCAwKSB7XG4gICAgYiA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIGEubGVuZ3RoICE9PSBiLmxlbmd0aCB8fCBhLnNvbWUoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuICFPYmplY3QuaXMoaXRlbSwgYltpbmRleF0pO1xuICB9KTtcbn07XG5cbnZhciBpbml0aWFsU3RhdGUgPSB7XG4gIGVycm9yOiBudWxsXG59O1xuXG52YXIgRXJyb3JCb3VuZGFyeSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZV9fZGVmYXVsdFtcImRlZmF1bHRcIl0oRXJyb3JCb3VuZGFyeSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgX2FyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBfYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KF9hcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICAgIF90aGlzLnJlc2V0RXJyb3JCb3VuZGFyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcztcblxuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMucHJvcHMub25SZXNldCA9PSBudWxsID8gdm9pZCAwIDogKF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMpLm9uUmVzZXQuYXBwbHkoX3RoaXMkcHJvcHMsIGFyZ3MpO1xuXG4gICAgICBfdGhpcy5yZXNldCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBFcnJvckJvdW5kYXJ5LmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciA9IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9O1xuXG4gIHZhciBfcHJvdG8gPSBFcnJvckJvdW5kYXJ5LnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZENhdGNoID0gZnVuY3Rpb24gY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGluZm8pIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMkb25FcnJvciwgX3RoaXMkcHJvcHMyO1xuXG4gICAgKF90aGlzJHByb3BzJG9uRXJyb3IgPSAoX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcykub25FcnJvcikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHByb3BzJG9uRXJyb3IuY2FsbChfdGhpcyRwcm9wczIsIGVycm9yLCBpbmZvKTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgdmFyIGVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcbiAgICB2YXIgcmVzZXRLZXlzID0gdGhpcy5wcm9wcy5yZXNldEtleXM7IC8vIFRoZXJlJ3MgYW4gZWRnZSBjYXNlIHdoZXJlIGlmIHRoZSB0aGluZyB0aGF0IHRyaWdnZXJlZCB0aGUgZXJyb3JcbiAgICAvLyBoYXBwZW5zIHRvICphbHNvKiBiZSBpbiB0aGUgcmVzZXRLZXlzIGFycmF5LCB3ZSdkIGVuZCB1cCByZXNldHRpbmdcbiAgICAvLyB0aGUgZXJyb3IgYm91bmRhcnkgaW1tZWRpYXRlbHkuIFRoaXMgd291bGQgbGlrZWx5IHRyaWdnZXIgYSBzZWNvbmRcbiAgICAvLyBlcnJvciB0byBiZSB0aHJvd24uXG4gICAgLy8gU28gd2UgbWFrZSBzdXJlIHRoYXQgd2UgZG9uJ3QgY2hlY2sgdGhlIHJlc2V0S2V5cyBvbiB0aGUgZmlyc3QgY2FsbFxuICAgIC8vIG9mIGNEVSBhZnRlciB0aGUgZXJyb3IgaXMgc2V0XG5cbiAgICBpZiAoZXJyb3IgIT09IG51bGwgJiYgcHJldlN0YXRlLmVycm9yICE9PSBudWxsICYmIGNoYW5nZWRBcnJheShwcmV2UHJvcHMucmVzZXRLZXlzLCByZXNldEtleXMpKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMkb25SZXNldEtlLCBfdGhpcyRwcm9wczM7XG5cbiAgICAgIChfdGhpcyRwcm9wcyRvblJlc2V0S2UgPSAoX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcykub25SZXNldEtleXNDaGFuZ2UpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRwcm9wcyRvblJlc2V0S2UuY2FsbChfdGhpcyRwcm9wczMsIHByZXZQcm9wcy5yZXNldEtleXMsIHJlc2V0S2V5cyk7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcbiAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZmFsbGJhY2tSZW5kZXIgPSBfdGhpcyRwcm9wczQuZmFsbGJhY2tSZW5kZXIsXG4gICAgICAgIEZhbGxiYWNrQ29tcG9uZW50ID0gX3RoaXMkcHJvcHM0LkZhbGxiYWNrQ29tcG9uZW50LFxuICAgICAgICBmYWxsYmFjayA9IF90aGlzJHByb3BzNC5mYWxsYmFjaztcblxuICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHtcbiAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICByZXNldEVycm9yQm91bmRhcnk6IHRoaXMucmVzZXRFcnJvckJvdW5kYXJ5XG4gICAgICB9O1xuXG4gICAgICBpZiAoIC8qI19fUFVSRV9fKi9SZWFjdF9fbmFtZXNwYWNlLmlzVmFsaWRFbGVtZW50KGZhbGxiYWNrKSkge1xuICAgICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmYWxsYmFja1JlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmFsbGJhY2tSZW5kZXIoX3Byb3BzKTtcbiAgICAgIH0gZWxzZSBpZiAoRmFsbGJhY2tDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fbmFtZXNwYWNlLmNyZWF0ZUVsZW1lbnQoRmFsbGJhY2tDb21wb25lbnQsIF9wcm9wcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlYWN0LWVycm9yLWJvdW5kYXJ5IHJlcXVpcmVzIGVpdGhlciBhIGZhbGxiYWNrLCBmYWxsYmFja1JlbmRlciwgb3IgRmFsbGJhY2tDb21wb25lbnQgcHJvcCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9O1xuXG4gIHJldHVybiBFcnJvckJvdW5kYXJ5O1xufShSZWFjdF9fbmFtZXNwYWNlLkNvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIHdpdGhFcnJvckJvdW5kYXJ5KENvbXBvbmVudCwgZXJyb3JCb3VuZGFyeVByb3BzKSB7XG4gIHZhciBXcmFwcGVkID0gZnVuY3Rpb24gV3JhcHBlZChwcm9wcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX25hbWVzcGFjZS5jcmVhdGVFbGVtZW50KEVycm9yQm91bmRhcnksIGVycm9yQm91bmRhcnlQcm9wcywgLyojX19QVVJFX18qL1JlYWN0X19uYW1lc3BhY2UuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHByb3BzKSk7XG4gIH07IC8vIEZvcm1hdCBmb3IgZGlzcGxheSBpbiBEZXZUb29sc1xuXG5cbiAgdmFyIG5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xuICBXcmFwcGVkLmRpc3BsYXlOYW1lID0gXCJ3aXRoRXJyb3JCb3VuZGFyeShcIiArIG5hbWUgKyBcIilcIjtcbiAgcmV0dXJuIFdyYXBwZWQ7XG59XG5cbmZ1bmN0aW9uIHVzZUVycm9ySGFuZGxlcihnaXZlbkVycm9yKSB7XG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdF9fbmFtZXNwYWNlLnVzZVN0YXRlKG51bGwpLFxuICAgICAgZXJyb3IgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRFcnJvciA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICBpZiAoZ2l2ZW5FcnJvciAhPSBudWxsKSB0aHJvdyBnaXZlbkVycm9yO1xuICBpZiAoZXJyb3IgIT0gbnVsbCkgdGhyb3cgZXJyb3I7XG4gIHJldHVybiBzZXRFcnJvcjtcbn1cbi8qXG5lc2xpbnRcbiAgQHR5cGVzY3JpcHQtZXNsaW50L3NvcnQtdHlwZS11bmlvbi1pbnRlcnNlY3Rpb24tbWVtYmVyczogXCJvZmZcIixcbiAgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRocm93LWxpdGVyYWw6IFwib2ZmXCIsXG4gIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItbnVsbGlzaC1jb2FsZXNjaW5nOiBcIm9mZlwiXG4qL1xuXG5leHBvcnRzLkVycm9yQm91bmRhcnkgPSBFcnJvckJvdW5kYXJ5O1xuZXhwb3J0cy51c2VFcnJvckhhbmRsZXIgPSB1c2VFcnJvckhhbmRsZXI7XG5leHBvcnRzLndpdGhFcnJvckJvdW5kYXJ5ID0gd2l0aEVycm9yQm91bmRhcnk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-error-boundary/dist/react-error-boundary.cjs.js\n");

/***/ })

};
;