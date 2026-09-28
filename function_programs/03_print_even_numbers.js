function isEven(n) {
    return n % 2 === 0 ? n : '\n';
}

function printEvenNumbers(number) {
    return number <= 0 ? '' : printEvenNumbers(number - 1) + isEven(number);
}

console.log(printEvenNumbers(11));