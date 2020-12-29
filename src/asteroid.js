const MovingObject = require("./moving_object");
const Util = require("./util.js")

Util.inherits(Asteroid, MovingObject);

const DEFAULT = {
    radius: 15,
    color: "black",
    length: 5
};

function Asteroid(pos) {
    // this.pos = pos;
    // this.vel = Util.randomVec(DEFAULT.length)
    // this.radius = DEFAULT.radius
    // this.color = DEFAULT.color
    MovingObject.call(this, pos, Util.randomVec(DEFAULT.length), DEFAULT.radius, DEFAULT.color);
}

module.exports = Asteroid