function calcSimpleInterest(amount, rate, time) {
    return (amount * rate * time) / 100;
}

console.log(calcSimpleInterest(1000, 5, 2));