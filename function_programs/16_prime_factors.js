const prime = require("./08_is_prime");

const divisor = 1;
function primeFactors(number, divisor) {
    if (number === 0) {
        return '';
    }

    const True = prime.isPrime(divisor);
    const False = number % divisor === 0;
    const isTrue = True && False;
    console.log(True);
    console.log(False);
    console.log(isTrue);
    console.log(number);
    console.log(divisor);


    return isTrue ? `\n${divisor}` + primeFactors(number / divisor, divisor) : primeFactors(number, divisor + 1);
}

// console.log(printPrimeFactors(12));
// console.log(prime.isPrime(divisor));
console.log(primeFactors(6, divisor));