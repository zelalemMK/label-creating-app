/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/inherits";
exports.ids = ["vendor-chunks/inherits"];
exports.modules = {

/***/ "(rsc)/../node_modules/inherits/inherits.js":
/*!********************************************!*\
  !*** ../node_modules/inherits/inherits.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("try {\n  var util = __webpack_require__(/*! util */ \"util\");\n  /* istanbul ignore next */\n  if (typeof util.inherits !== 'function') throw '';\n  module.exports = util.inherits;\n} catch (e) {\n  /* istanbul ignore next */\n  module.exports = __webpack_require__(/*! ./inherits_browser.js */ \"(rsc)/../node_modules/inherits/inherits_browser.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLGtCQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUUsdUhBQWlEO0FBQ25EIiwic291cmNlcyI6WyIvVXNlcnMvemVsYWxlbW1la29ubmVuL0Rlc2t0b3AvUGl4ZWxQZWFrL3Byb2plY3RzL2xhYmVsLWNyZWF0aW5nLWFwcC9sYWJlbC1jcmVhdGluZy1hcHAvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInRyeSB7XG4gIHZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAodHlwZW9mIHV0aWwuaW5oZXJpdHMgIT09ICdmdW5jdGlvbicpIHRocm93ICcnO1xuICBtb2R1bGUuZXhwb3J0cyA9IHV0aWwuaW5oZXJpdHM7XG59IGNhdGNoIChlKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9pbmhlcml0c19icm93c2VyLmpzJyk7XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/inherits/inherits.js\n");

/***/ }),

/***/ "(rsc)/../node_modules/inherits/inherits_browser.js":
/*!****************************************************!*\
  !*** ../node_modules/inherits/inherits_browser.js ***!
  \****************************************************/
/***/ ((module) => {

eval("if (typeof Object.create === 'function') {\n  // implementation from standard node.js 'util' module\n  module.exports = function inherits(ctor, superCtor) {\n    if (superCtor) {\n      ctor.super_ = superCtor\n      ctor.prototype = Object.create(superCtor.prototype, {\n        constructor: {\n          value: ctor,\n          enumerable: false,\n          writable: true,\n          configurable: true\n        }\n      })\n    }\n  };\n} else {\n  // old school shim for old browsers\n  module.exports = function inherits(ctor, superCtor) {\n    if (superCtor) {\n      ctor.super_ = superCtor\n      var TempCtor = function () {}\n      TempCtor.prototype = superCtor.prototype\n      ctor.prototype = new TempCtor()\n      ctor.prototype.constructor = ctor\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL3plbGFsZW1tZWtvbm5lbi9EZXNrdG9wL1BpeGVsUGVhay9wcm9qZWN0cy9sYWJlbC1jcmVhdGluZy1hcHAvbGFiZWwtY3JlYXRpbmctYXBwL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/inherits/inherits_browser.js\n");

/***/ })

};
;