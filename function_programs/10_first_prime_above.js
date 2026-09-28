const prime = require("./08_is_prime");

function firstPrimeAbove(number) {
    return prime.isPrime(number) ? number : firstPrimeAbove(number + 1);
}

console.log(firstPrimeAbove(20));