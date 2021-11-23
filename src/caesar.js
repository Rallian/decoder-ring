// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // take input and convert it using shift(a number representing how far in either direction to shift the letter)
    //if shift is 0, less than -25 or greater than 25 function should return false
    //spaces maintained throughout, as well as non alphabet symbols.
    
    if (!input || !shift || shift < -25 || shift > 25 || shift === 0 || typeof input !== "string") {
      //checking if variables meet requirements to move forward
      return false;
    }
    if (!encode) {  //checks to see if it is encode or decode, if decode; change shift to a negative number so that it decodes.
      shift *= -1;
    }
    //turn input into an array
    let newInput = input.toLowerCase().split("");
    //array to hold characters.
    let shiftedChars = [];
    //loop through new array
    for (let index in newInput) {
      if (
        newInput[index].charCodeAt(0) < 97 ||     //check if UTF code is outside of lowercase alphabet(looking for symbols ect.)
        newInput[index].charCodeAt(0) > 122
      ) {
        shiftedChars.push(newInput[index]);  //if it is, push into created array.
      } else {
        let coded = newInput[index].charCodeAt(0);    //if it is within alphabet time to encode or decode.
        const shiftFunction = () => {   //nested function that shifts our UTF numbers.
          let codedAndShifted = coded + shift;
          if (codedAndShifted < 97) {  //wraps numbers if they shift outside of alphabet.
            return (codedAndShifted += 26);
          }
          if (codedAndShifted > 122) {
            return (codedAndShifted -= 26);
          } else {
            return codedAndShifted;
          }
        };
        let shiftedChar = String.fromCharCode(shiftFunction()); //turns our UTF numbers back into letters.
        shiftedChars.push(shiftedChar);
      }
    }
    return shiftedChars.join("");
  }

  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
