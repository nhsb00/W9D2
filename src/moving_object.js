const mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

function MovingObject() {
    
}

MovingObect.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(250, 250, 80, 0, 2 * Math.PI);
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 20;
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();
}

module.exports = MovingObject;