const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

document.addEventListener('DOMContentLoaded', function () {
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = 500;
    canvasEl.height = 500;
    
    const ctx = canvasEl.getContext('2d');
    debugger
    // ctx.fillStyle = 'green';
    // ctx.fillRect(0, 0, 500, 500);
    const mo = new MovingObject([30, 30], [10, 10], 5, "#00FF00");
    mo.draw(ctx);
    mo.move(100, 100);
});

console.log("Webpack is working!")