function calcCompoundInterest(amount, rate, time) {
    return amount * ((rate + 100) / 100) ** time;
}

console.log(calcCompoundInterest(1000, 50, 2));
