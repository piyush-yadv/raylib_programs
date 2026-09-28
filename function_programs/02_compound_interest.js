function calcCompoundInterest(amount, rate, time) {
    const compundAmount = amount * ((rate + 100) / 100) ** time;
    return compundAmount - amount;
}

console.log(calcCompoundInterest(1000, 10, 2));
