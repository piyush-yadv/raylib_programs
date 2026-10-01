const r = require("raylib");

function createScanner(x, y, width, height, velocity, color, maxRange) {
    const minRange = x;
    return {
        x: x, y: y, width: width, height: height,
        velocity: -velocity, color: color, minRange: minRange, maxRange: maxRange,
    };
}

function drawScanners(scanner) {
    r.DrawRectangle(scanner.x, scanner.y, scanner.width, scanner.height, scanner.color);
}

function updateVelocity(dl, scanner) {
    const scannerOutOfBounds = (dl <= scanner.minRange || dl >= scanner.maxRange);
    return scanner.velocity = scannerOutOfBounds ? -scanner.velocity : scanner.velocity;
}

module.exports = { createScanner, drawScanners, updateVelocity, };