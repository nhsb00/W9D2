document.addEventListener('DOMContentLoaded', function () {
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = 500;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.arc(250, 250, 80, 0, 2 * Math.PI);
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 20;
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();
});
console.log("Webpack is working!")