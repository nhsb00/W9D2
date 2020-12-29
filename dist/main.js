/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("\n\nfunction MovingObject(pos, vel, radius, color) {\n    this.pos = pos;\n    this.vel = vel;\n    this.radius = radius;\n    this.color = color;\n}\n\nconst mo = new MovingObject([30, 30], [10, 10], 5, \"#00FF00\");\n\nMovingObject.prototype.draw = function (ctx) {\n    debugger\n    ctx.beginPath();\n    debugger\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.lineWidth = 20;\n    ctx.fill();\n}\nconst maxX = 100;\nconst maxY = 100; \nMovingObject.prototype.move = function(maxX, maxY) {\n    // this.pos[0] += this.vel[0];\n    // this.pos[1] += this.vel[1];\n    let dx = this.vel[0] * maxX;\n    let dy = this.vel[1] * maxY;\n    this.pos = [this.pos[0] + dx, this.pos[1] + dy];\n}\n\n//mo.draw(this);\nmodule.exports = MovingObject;\n\n// Circle.prototype.moveRandom = function (maxX, maxY) {\n//     let dx = (Math.random() * 2) - 1;\n//     let dy = (Math.random() * 2) - 1;\n\n//     this.centerX = Math.abs((this.centerX + (dx * this.radius * 0.1)) % maxX);\n//     this.centerY = Math.abs((this.centerY + (dy * this.radius) * 0.1) % maxY);\n// };\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nwindow.MovingObject = MovingObject;\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    const canvasEl = document.getElementById('game-canvas');\n    canvasEl.width = 500;\n    canvasEl.height = 500;\n    \n    const ctx = canvasEl.getContext('2d');\n    debugger\n    // ctx.fillStyle = 'green';\n    // ctx.fillRect(0, 0, 500, 500);\n    const mo = new MovingObject([30, 30], [10, 10], 5, \"#00FF00\");\n    mo.draw(ctx);\n    mo.move(100, 100);\n});\n\nconsole.log(\"Webpack is working!\")\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;