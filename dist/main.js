/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("document.addEventListener('DOMContentLoaded', function () {\n    const canvasEl = document.getElementById('canvas');\n    canvasEl.width = 500;\n    canvasEl.height = 500;\n\n    const ctx = canvasEl.getContext('2d');\n    ctx.fillStyle = 'green';\n    ctx.fillRect(0, 0, 500, 500);\n\n    ctx.beginPath();\n    ctx.arc(250, 250, 80, 0, 2 * Math.PI);\n    ctx.strokeStyle = 'purple';\n    ctx.lineWidth = 20;\n    ctx.stroke();\n    ctx.fillStyle = 'yellow';\n    ctx.fill();\n});\n\n//# sourceURL=webpack:///./src/index.js?");
/******/ })()
;