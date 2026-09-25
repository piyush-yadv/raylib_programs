function scannerUpdate(x, min, max) {

    if (x === min) flag = true;
    if (x === max) flag = false;

    return flag ? x + 1 : x - 1;

}

module.exports = {

    scannerUpdate,

};