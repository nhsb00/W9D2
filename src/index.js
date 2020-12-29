const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

window.Asteroid = Asteroid;
window.MovingObject = MovingObject;

document.addEventListener('DOMContentLoaded', function () {
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = 500;
    canvasEl.height = 500;
    
    const ctx = canvasEl.getContext('2d');
    debugger
    // ctx.fillStyle = 'green';
    // ctx.fillRect(0, 0, 500, 500);
    const mo = new MovingObject([100, 100], [10, 10], 100, "#00FF00");
    mo.draw(ctx);
    mo.move(100, 100);
    const ast = new Asteroid([20, 20], [10, 10], 20, "black");
    ast.draw(ctx)

});

console.log("Webpack is working!")