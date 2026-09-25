
function parentheses(number){
    if(number <= 0){
        return ``;
    }
    
    return (`(${parentheses(number - 1)})`);
}

console.log(parentheses(5));
console.log(parentheses(4));
console.log(parentheses(3));
console.log(parentheses(2));
console.log(parentheses(1));
