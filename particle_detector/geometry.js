function scannerUpdate(x, min, max) {
    let flag;
    if (x <= min) flag = true;
    if (x >= max) flag = false;

    return flag ? x + 2 : x - 2;

}

module.exports = {

    scannerUpdate,

};