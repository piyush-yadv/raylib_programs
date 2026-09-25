function describeWord(word){
    return word.length === 0 ? "Empty" : "Non-Empty";
}

console.log(describeWord(""));
console.log(describeWord("A"));
console.log(describeWord("And"));
console.log(describeWord("Anderson"));
