const Asteroid = require("./asteroid.js")
const Bullet = require("./bullet.js")
const Util = require("./util.js")
const Ship = require("./ship.js")

function Game() {
   
    this.addAsteroids()
}

Game.DIM_X = 100
Game.DIM_Y = 100
Game.NUM_ASTEROIDS = 10

Game.prototype.addAsteroids = function () {
for (let i = 0; i < Game.NUM_ASTEROIDS; i++){
    new Asteroid(Game.randomPosition())
}
}

Game.prototype.randomPosition = function () {
    return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()]
}