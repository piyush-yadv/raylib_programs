function intDivision(dividend, divisor) {
    return (dividend - dividend % divisor) / divisor;
}

function calcDigit(number) {
    return number === 0 ? 0 : 1 + calcDigit(intDivision(number, 10));
}

function calcArmstrong(number, power) {
    return number === 0 ? 0 : calcArmstrong(intDivision(number, 10), power) + (number % 10) ** power;
}

function isArmstrong(number) {
    const power = calcDigit(number);
    return number === calcArmstrong(number, power);
}

console.log(isArmstrong(163));