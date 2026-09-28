function hcf(x, y) {
    return y % x === 0 ? x : hcf(y % x, x);
}

console.log(hcf(30, 20));