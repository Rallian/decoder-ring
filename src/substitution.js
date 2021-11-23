// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  let realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  

  function substitution(input, alphabet, encode = true) {
    //alphabet is the cipher, and must be exactly 26 characters long.
    if (!input || !alphabet || alphabet.length != 26 || typeof input !== "string") return false;
    const newInput = input.toLowerCase().split("");
    //alphabet must have all unique characters.
    for (let i = 0; i < newInput.length; i++) { //loop through newInput
    if(alphabet.indexOf(newInput[i])!= alphabet.lastIndexOf(newInput[i])){
      return false //while looping compare index's to make sure there are no duplicates.
      }
    }
    if (encode) {
      return theEncoder(input, alphabet); //if encode is true return helper function.
    } else {
      return theDecoder(input, alphabet);
    }
  }

  function theEncoder(input, alphabet) {
    const newInput = input.toLowerCase().split("");
    let message = [];
    for (let i = 0; i < newInput.length; i++) {
      let index = realAlphabet.indexOf(newInput[i]); //match up the index of realAlphabet and newInput
      let code = alphabet[index]; //code becomes the letter that matches the index within alphabet.
      if (index < 0) {
        //checks for spaces
        message.push(newInput[i]);
      } else {
        message.push(code);
      }
    }
    return message.join(""); //joins it back into one string.
  }

  function theDecoder(input, alphabet) {
    const newInput = input.toLowerCase().split("");
    let message = [];
    for (let i = 0; i < newInput.length; i++) {
      let index = alphabet.indexOf(newInput[i]);
      let code = realAlphabet[index];
      if (index < 0) {
        message.push(newInput[i]);
      }
      message.push(code);
    }
    return message.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
