const r = require("raylib");

function isOverlap(scanner, partical) {
    const start = partical.x - scanner.width;
    const end = partical.x + partical.width;
    return scanner.x >= start && scanner.x <= end;
}

function updateColor(scanner, partical1, partical2) {
    return isOverlap(scanner, partical1) || isOverlap(scanner, partical2) ? r.RED : r.WHITE;
}

function updateHorizontalColor(scanner, partical) {
    const start = partical.y - scanner.height;
    const end = partical.y + partical.height;
    return scanner.y >= start && scanner.y <= end ? r.RED : r.WHITE;
}

module.exports = { updateColor, updateHorizontalColor };