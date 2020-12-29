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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\")\n\nUtil.inherits(Asteroid, MovingObject);\n\nconst DEFAULT = {\n    radius: 15,\n    color: \"black\",\n    length: 5\n};\n\nfunction Asteroid(pos, vel, radius, color) {\n    this.pos = pos;\n    this.vel = Util.randomVec(DEFAULT.length)\n    this.radius = DEFAULT.radius\n    this.color = DEFAULT.color\n    \n    MovingObject.call(this, pos, vel, radius, color);\n}\n\nmodule.exports = Asteroid\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("\n\nfunction MovingObject(pos, vel, radius, color) {\n    this.pos = pos;\n    this.vel = vel;\n    this.radius = radius;\n    this.color = color;\n}\n\nconst mo = new MovingObject([30, 30], [10, 10], 5, \"#00FF00\");\n\nMovingObject.prototype.draw = function (ctx) {\n    debugger\n    ctx.beginPath();\n    debugger\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.lineWidth = 20;\n    ctx.fill();\n}\n\nconst maxX = 100;\nconst maxY = 100; \nMovingObject.prototype.move = function(maxX, maxY) {\n    // this.pos[0] += this.vel[0];\n    // this.pos[1] += this.vel[1];\n    let dx = this.vel[0] * maxX;\n    let dy = this.vel[1] * maxY;\n    this.pos = [this.pos[0] + dx, this.pos[1] + dy];\n}\n\n//mo.draw(this);\nmodule.exports = MovingObject;\n\n// Circle.prototype.moveRandom = function (maxX, maxY) {\n//     let dx = (Math.random() * 2) - 1;\n//     let dy = (Math.random() * 2) - 1;\n\n//     this.centerX = Math.abs((this.centerX + (dx * this.radius * 0.1)) % maxX);\n//     this.centerY = Math.abs((this.centerY + (dy * this.radius) * 0.1) % maxY);\n// };\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    \n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n  \n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

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
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nwindow.Asteroid = Asteroid;\nwindow.MovingObject = MovingObject;\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    const canvasEl = document.getElementById('game-canvas');\n    canvasEl.width = 500;\n    canvasEl.height = 500;\n    \n    const ctx = canvasEl.getContext('2d');\n    debugger\n    // ctx.fillStyle = 'green';\n    // ctx.fillRect(0, 0, 500, 500);\n    const mo = new MovingObject([100, 100], [10, 10], 100, \"#00FF00\");\n    mo.draw(ctx);\n    mo.move(100, 100);\n    const ast = new Asteroid([20, 20], [10, 10], 20, \"black\");\n    ast.draw(ctx)\n\n});\n\nconsole.log(\"Webpack is working!\")\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;