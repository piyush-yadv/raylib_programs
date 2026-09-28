function scannerOutOfBounds(scannerX, minRange, maxRange) {
    return (scannerX <= minRange || scannerX >= maxRange);
}

function isOverlap(scanner_x, scanner_width, partical_x, partical_width) {
    return scanner_x >= (partical_x - scanner_width) && scanner_x <= (partical_x + partical_width);
}

module.exports = {
    scannerOutOfBounds,
    isOverlap,
};