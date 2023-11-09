"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jss-plugin-props-sort";
exports.ids = ["vendor-chunks/jss-plugin-props-sort"];
exports.modules = {

/***/ "(ssr)/./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.cjs.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.cjs.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\n/**\n * Sort props by length.\n */\nfunction jssPropsSort() {\n  var sort = function sort(prop0, prop1) {\n    if (prop0.length === prop1.length) {\n      return prop0 > prop1 ? 1 : -1;\n    }\n\n    return prop0.length - prop1.length;\n  };\n\n  return {\n    onProcessStyle: function onProcessStyle(style, rule) {\n      if (rule.type !== 'style') return style;\n      var newStyle = {};\n      var props = Object.keys(style).sort(sort);\n\n      for (var i = 0; i < props.length; i++) {\n        newStyle[props[i]] = style[props[i]];\n      }\n\n      return newStyle;\n    }\n  };\n}\n\nexports[\"default\"] = jssPropsSort;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1wcm9wcy1zb3J0L2Rpc3QvanNzLXBsdWdpbi1wcm9wcy1zb3J0LmNqcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1wcm9wcy1zb3J0L2Rpc3QvanNzLXBsdWdpbi1wcm9wcy1zb3J0LmNqcy5qcz84ZGMwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLyoqXG4gKiBTb3J0IHByb3BzIGJ5IGxlbmd0aC5cbiAqL1xuZnVuY3Rpb24ganNzUHJvcHNTb3J0KCkge1xuICB2YXIgc29ydCA9IGZ1bmN0aW9uIHNvcnQocHJvcDAsIHByb3AxKSB7XG4gICAgaWYgKHByb3AwLmxlbmd0aCA9PT0gcHJvcDEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcHJvcDAgPiBwcm9wMSA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDAubGVuZ3RoIC0gcHJvcDEubGVuZ3RoO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzU3R5bGU6IGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgICBpZiAocnVsZS50eXBlICE9PSAnc3R5bGUnKSByZXR1cm4gc3R5bGU7XG4gICAgICB2YXIgbmV3U3R5bGUgPSB7fTtcbiAgICAgIHZhciBwcm9wcyA9IE9iamVjdC5rZXlzKHN0eWxlKS5zb3J0KHNvcnQpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5ld1N0eWxlW3Byb3BzW2ldXSA9IHN0eWxlW3Byb3BzW2ldXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1N0eWxlO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0ganNzUHJvcHNTb3J0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.cjs.js\n");

/***/ })

};
;