function nthFibonacciTerm(n) {
    return n <= 1 ? n : nthFibonacciTerm(n - 1) + nthFibonacciTerm(n - 2);
}

function fibonacciSeries(number) {
    return number <= 0 ? `0` : fibonacciSeries(number - 1) + `\n${nthFibonacciTerm(number)}`;
}

console.log(fibonacciSeries(21));