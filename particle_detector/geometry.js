let firstFlag;
let secondFlag;

function firstScannerUpdate(x, min, max, speed) {
    if (x <= min) firstFlag = true;
    if (x === max) firstFlag = false;

    return firstFlag ? x + speed : x - speed;
}

function secondScannerUpdate(x, min, max, speed) {

    if (x <= min) secondFlag = true;
    if (x === max) secondFlag = false;

    return secondFlag ? x + speed : x - speed;
}

function isOverlap(scannerX, scannerWidth, targetX, targetWidth) {

    if (scannerX >= (targetX - scannerWidth) && scannerX <= (targetX + targetWidth)) {
        return true;
    }
    return false;
}


module.exports = {

    firstScannerUpdate,
    secondScannerUpdate,
    isOverlap,
};