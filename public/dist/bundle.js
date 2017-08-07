/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(2);
var semantic_ui_react_1 = __webpack_require__(3);
var MastHead = (function (_super) {
    __extends(MastHead, _super);
    function MastHead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MastHead.prototype.getHelp = function () {
    };
    MastHead.prototype.render = function () {
        var _this = this;
        return (React.createElement(semantic_ui_react_1.Segment, { inverted: true, vertical: true, textAlign: "center", className: "masthead" },
            React.createElement(semantic_ui_react_1.Container, null,
                React.createElement(semantic_ui_react_1.Menu, { large: true, pointing: true, secondary: true, inverted: true },
                    React.createElement(semantic_ui_react_1.Item, { as: "a", href: "https://docs.google.com/spreadsheets/d/1dtw1b7XKx6y8VdusKTvCZd4Fp19yMZWTHO9t1QJQ5SE/edit#gid=838766286" }, "\u5354\u52A9\u7DE8\u8F2F\u6212\u6BD2\u5834\u6240\u8CC7\u8A0A"))),
            React.createElement(semantic_ui_react_1.Container, { text: true },
                React.createElement(semantic_ui_react_1.Header, { as: "h1", inverted: true }, "\u6212\u6BD2\u597D\u6240\u5728"),
                React.createElement("h2", null, "\u5354\u52A9\u6210\u766E\u8005\u6216\u89C0\u8B77\u4EBA\u3001\u5BB6\u5C6C\u3001\u500B\u6848\u7BA1\u7406\u5E2B\u4E00\u8D77\u70BA\u6210\u766E\u8005\u627E\u5230\u9069\u5408\u6212\u6BD2\u7684\u5354\u52A9\u6A5F\u69CB"),
                React.createElement(semantic_ui_react_1.Button, { primary: true, size: "huge", onClick: function () { _this.getHelp(); } },
                    "\u5C0B\u6C42\u5354\u52A9",
                    React.createElement(semantic_ui_react_1.Icon, { className: "right arrow" })))));
    };
    return MastHead;
}(React.Component));
var Main = function () {
    return React.createElement("div", null,
        React.createElement("p", null));
};
ReactDOM.render(React.createElement(Main, null), document.getElementById("main"));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = semanticUIReact;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map