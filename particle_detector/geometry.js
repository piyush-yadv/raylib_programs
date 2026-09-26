let firstFlag;
let secondFlag;
let verticalFlag;

function firstScannerUpdate(x, min, max, speed) {
    if (x <= min) firstFlag = true;
    if (x >= max) firstFlag = false;

    return firstFlag ? x + speed : x - speed;
}

function secondScannerUpdate(x, min, max, speed) {

    if (x <= min) secondFlag = true;
    if (x >= max) secondFlag = false;

    return secondFlag ? x + speed : x - speed;
}

function verticalScannerUpdate(y, min, max, speed) {

    if (y <= min) verticalFlag = true;
    if (y >= max) verticalFlag = false;

    return verticalFlag ? y + speed : y - speed;
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
    verticalScannerUpdate,
    isOverlap,
};