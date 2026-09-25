/* function inputGrowShrinkStar(input){
    return growShrinkStar(input, input);
}

function growShrinkStar(input, number) {
  if (number === 0) {
    return ``;
  }

  return starPrinter(input - number + 1) + growShrinkStar(input, number - 1) + starPrinter(input - number);
  
}

function starPrinter(number){
    if (number === 0) {
        return `\n`;
    }

    return `*${starPrinter(number - 1)}`;
}


console.log(inputGrowShrinkStar(5));
 */

/* function growShrinkStar(number) {
  return growStar(number) + shrinkStar(number);
}

function growStar(number) {
  if (number === 0) {
    return ``;
  }

  return growStar(number - 1) + starPrinter(number);
}

function shrinkStar(number) {
  if (number === 0) {
    return ``;
  }
  return starPrinter(number - 1) + shrinkStar(number - 1);
}

function starPrinter(number) {
  if (number === 0) {
    return `\n`;
  }

  return `*${starPrinter(number - 1)}`;
}

console.log(growShrinkStar(3));
 */