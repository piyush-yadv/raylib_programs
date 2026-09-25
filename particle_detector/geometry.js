function scannerUpdate(x, min, max) {

    if (x === min) flag = true;
    if (x === max) flag = false;

    return flag ? x + 1 : x - 1;

}

function isOverlap(scannerX, scannerWidth, targetX, targetWidth) {

    if (scannerX >= (targetX - scannerWidth) && scannerX <= (targetX + targetWidth)) {
        return true;
    }
    return false;
}

module.exports = {

    scannerUpdate,
    isOverlap,

};