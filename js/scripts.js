const savedSentence = prompt("enter a sentence");



function firstAndLast() {
    let first = savedSentence.charAt(savedSentence[0]).toUpperCase();
    let last = savedSentence.charAt(savedSentence.length-1).toUpperCase();
    let final = first + last;
    return final;
}
let result = firstAndLast();

function flip(result) {
  let newFirst = result[1];
  let newLast = result[0];

  let flippedFinal = newFirst + newLast;
  return flippedFinal;
}

//let reversedResult = flip();

//alert(firstAndLast());
alert(flip(fristAndLast(result)));
