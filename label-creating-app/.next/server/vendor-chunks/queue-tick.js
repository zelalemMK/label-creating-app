/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/queue-tick";
exports.ids = ["vendor-chunks/queue-tick"];
exports.modules = {

/***/ "(rsc)/../node_modules/queue-tick/process-next-tick.js":
/*!*******************************************************!*\
  !*** ../node_modules/queue-tick/process-next-tick.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = (typeof process !== 'undefined' && typeof process.nextTick === 'function')\n  ? process.nextTick.bind(process)\n  : __webpack_require__(/*! ./queue-microtask */ \"(rsc)/../node_modules/queue-tick/queue-microtask.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL3F1ZXVlLXRpY2svcHJvY2Vzcy1uZXh0LXRpY2suanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBLElBQUksbUJBQU8sQ0FBQyw4RUFBbUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy96ZWxhbGVtbWVrb25uZW4vRGVza3RvcC9QaXhlbFBlYWsvcHJvamVjdHMvbGFiZWwtY3JlYXRpbmctYXBwL2xhYmVsLWNyZWF0aW5nLWFwcC9ub2RlX21vZHVsZXMvcXVldWUtdGljay9wcm9jZXNzLW5leHQtdGljay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9ICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MubmV4dFRpY2sgPT09ICdmdW5jdGlvbicpXG4gID8gcHJvY2Vzcy5uZXh0VGljay5iaW5kKHByb2Nlc3MpXG4gIDogcmVxdWlyZSgnLi9xdWV1ZS1taWNyb3Rhc2snKVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/queue-tick/process-next-tick.js\n");

/***/ }),

/***/ "(rsc)/../node_modules/queue-tick/queue-microtask.js":
/*!*****************************************************!*\
  !*** ../node_modules/queue-tick/queue-microtask.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("module.exports = typeof queueMicrotask === 'function' ? queueMicrotask : (fn) => Promise.resolve().then(fn)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL3F1ZXVlLXRpY2svcXVldWUtbWljcm90YXNrLmpzIiwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvemVsYWxlbW1la29ubmVuL0Rlc2t0b3AvUGl4ZWxQZWFrL3Byb2plY3RzL2xhYmVsLWNyZWF0aW5nLWFwcC9sYWJlbC1jcmVhdGluZy1hcHAvbm9kZV9tb2R1bGVzL3F1ZXVlLXRpY2svcXVldWUtbWljcm90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHF1ZXVlTWljcm90YXNrID09PSAnZnVuY3Rpb24nID8gcXVldWVNaWNyb3Rhc2sgOiAoZm4pID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZm4pXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/queue-tick/queue-microtask.js\n");

/***/ })

};
;