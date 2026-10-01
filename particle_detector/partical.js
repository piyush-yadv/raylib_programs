const r = require("raylib");

function createPartical(x, y, width, height) {
    return { x: x, y: y, width: width, height: height, };
}

function drawParticles(partical) {
    const color = r.SKYBLUE;
    r.DrawRectangle(partical.x, partical.y, partical.width, partical.height, color);
}

module.exports = { createPartical, drawParticles, };