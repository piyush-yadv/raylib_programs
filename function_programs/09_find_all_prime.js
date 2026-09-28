const prime = require("./08_is_prime");

function findAllPrime(number) {
    const primeTrue = prime.isPrime(number) ? `\n${number}` : ``;
    return number <= 1 ? number : findAllPrime(number - 1) + primeTrue;
}

console.log(findAllPrime(11));
