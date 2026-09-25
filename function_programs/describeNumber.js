function describeNumber(number){

    if(number === 0){
        return "Zero";
    }

    if(number > 0){
        return "Positive";
    }

    return "Negative";
}

console.log(describeNumber(10));
console.log(describeNumber(0));
console.log(describeNumber(-10));
