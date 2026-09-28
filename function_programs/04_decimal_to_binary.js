function intDivison(n) {
    return (n - (n % 2)) / 2;
}

function decimalToBinary(number) {
    return number <= 0 ? '' : decimalToBinary(intDivison(number)) + `${number % 2}`;
}

console.log(decimalToBinary(10));