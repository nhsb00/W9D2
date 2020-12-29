

function MovingObject(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
}

const mo = new MovingObject([30, 30], [10, 10], 5, "#00FF00");

MovingObject.prototype.draw = function (ctx) {
    debugger
    ctx.beginPath();
    debugger
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.lineWidth = 20;
    ctx.fill();
}

const maxX = 100;
const maxY = 100; 
MovingObject.prototype.move = function(maxX, maxY) {
    // this.pos[0] += this.vel[0];
    // this.pos[1] += this.vel[1];
    let dx = this.vel[0] * maxX;
    let dy = this.vel[1] * maxY;
    this.pos = [this.pos[0] + dx, this.pos[1] + dy];
}

//mo.draw(this);
module.exports = MovingObject;

// Circle.prototype.moveRandom = function (maxX, maxY) {
//     let dx = (Math.random() * 2) - 1;
//     let dy = (Math.random() * 2) - 1;

//     this.centerX = Math.abs((this.centerX + (dx * this.radius * 0.1)) % maxX);
//     this.centerY = Math.abs((this.centerY + (dy * this.radius) * 0.1) % maxY);
// };