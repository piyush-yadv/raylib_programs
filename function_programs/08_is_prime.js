function countFactor(number, divisor, factor) {
    divisor++;
    factor += (number % divisor === 0) ? 1 : 0;

    return divisor > (number) || factor > 2 ? factor : countFactor(number, divisor, factor);
}

function isPrime(number) {
    let factor = 0;
    let divisor = 0;

    return countFactor(number, divisor, factor) === 2;
}

module.exports = {
    isPrime,
};

// console.log(isPrime(97));