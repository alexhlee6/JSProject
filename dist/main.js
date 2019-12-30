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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\n  BUTTON_POSITIONS: {\n    left: [51, 550], up: [142, 550],\n    down: [233, 550], right: [324, 550]\n  },\n  KEY_COLORS: {\n    left: \"#e87b96\", up: \"#79a5ed\",\n    down: \"#80ed9b\", right: \"#ad80ed\"\n  }\n\n  \n\n});\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level.js */ \"./src/level.js\");\n\n\nclass Game {\n\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height }\n\n    this.animate = this.animate.bind(this);\n    this.registerEvents();\n  }\n\n  play() {\n    this.running = true;\n    this.animate();\n  }\n\n  restart() {\n    this.running = false;\n    this.score = 0;\n    this.level = new _level_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\n    this.animate();\n  }\n\n  registerEvents() {\n    this.boundClickHandler = this.click.bind(this);\n    this.ctx.canvas.addEventListener(\"mousedown\", this.boundClickHandler);\n    this.keypressHandler = this.keypress.bind(this);\n    window.addEventListener(\"keydown\", this.keypressHandler);\n\n    this.restart();\n  }\n\n  click(e) {\n    if (!this.running) {\n      this.play();\n    } else {\n      this.restart();\n    }\n  }\n\n  keypress(e) {\n    let keyTranslate = {\n      37: \"left\", 38: \"up\", 39: \"right\", 40: \"down\"\n    }\n    \n    console.log(keyTranslate[e.keyCode]);\n  }\n\n  \n\n\n  animate() {\n    this.level.animate(this.ctx);\n    this.drawScore();\n\n    if (this.running) {\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }\n\n  \n  drawScore() {\n    // const location = { x: this.dimensions.width / 2, y: this.dimensions.height / 4 }\n    const location = { x: 340, y: 40 }\n    this.ctx.font = \"bold 30pt helvetica\";\n    this.ctx.fillStyle = \"white\";\n    this.ctx.fillText(this.score, location.x, location.y);\n    // this.ctx.strokeStyle = \"black\";\n    // this.ctx.lineWidth = 2;\n    // this.ctx.strokeText(this.score, location.x, location.y);\n  }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gamepad.js":
/*!************************!*\
  !*** ./src/gamepad.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gamepad; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nconst BUTTON_POSITIONS = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BUTTON_POSITIONS;\nconst KEY_COLORS = _constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].KEY_COLORS;\n\nclass Gamepad {\n\n  constructor(options) {\n    this.dimensions = options.dimensions;\n    this.key = options.key;\n  }\n\n  animate(ctx) {\n    this.drawGamepad(ctx);\n  }\n\n  drawGamepad(ctx) {\n    let dirs = [\"up\", \"down\", \"left\", \"right\"];\n    let radius = 40;\n    let vel = [10, 10];\n\n    dirs.forEach((dir, i) => {\n      this.createButton(ctx, dir, radius, vel);\n    });\n  }\n\n  createButton (ctx, dir, radius, vel) {\n    ctx.beginPath();\n    let color;\n    let pos;\n    switch (dir) {\n      case \"left\":\n        [color, pos] = [KEY_COLORS.left, BUTTON_POSITIONS.left];\n        break;\n      case \"up\":\n        [color, pos] = [KEY_COLORS.up, BUTTON_POSITIONS.up];\n        break;\n      case \"down\":\n        [color, pos] = [KEY_COLORS.down, BUTTON_POSITIONS.down];\n        break;\n      case \"right\":\n        [color, pos] = [KEY_COLORS.right, BUTTON_POSITIONS.right];\n        break;\n    }\n    ctx.fillStyle = color;\n    ctx.arc(\n      pos[0], pos[1], radius, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n  }\n}\n\n//# sourceURL=webpack:///./src/gamepad.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('game-canvas');\n  new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n})\n\n\n// document.addEventListener(\"DOMContentLoaded\", function () {\n//   const canvasEl = document.getElementById(\"game-canvas\");\n//   canvasEl.width = \"375\";\n//   canvasEl.height = \"600\";\n\n//   const ctx = canvasEl.getContext(\"2d\");\n//   ctx.fillStyle = \"#d1d1d1\";\n//   ctx.fillRect(0, 0, \"375\", \"600\");\n\n  \n//   // let arr = require(\"./arrow.js\");\n//   // arr.draw(ctx);\n//   const game = new Game();\n//   new GameView(game, ctx).start();\n// });\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\n/* harmony import */ var _gamepad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamepad */ \"./src/gamepad.js\");\n\n\nclass Level {\n\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.gamepad = new _gamepad__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dimensions);\n    \n  }\n\n  animate(ctx) {\n    this.drawBackground(ctx);\n    this.drawGamepad(ctx);\n  }\n\n  drawBackground(ctx) {\n    ctx.fillStyle = \"#232324\";\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  drawGamepad(ctx) {\n    this.gamepad.animate(ctx);\n  }\n}\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ });