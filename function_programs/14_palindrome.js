function intDivision(dividend, divisor) {
    return (dividend - dividend % divisor) / divisor;
}

function calcReverse(number, reverseNumber) {
    const reverseSum = (reverseNumber * 10) + (number % 10);

    return number === 0 ? reverseNumber : calcReverse(intDivision(number, 10), reverseSum);
}

function isPalindrome(number) {
    const reverseNum = 0;
    return number === calcReverse(number, reverseNum);
}

console.log(isPalindrome(1234321));