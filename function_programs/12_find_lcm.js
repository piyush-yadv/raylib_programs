function hcf(x, y) {
    return y % x === 0 ? x : hcf(y % x, x);
}

function lcm(x, y) {
    return (x * y) / hcf(x, y);
}

console.log(lcm(14, 15));