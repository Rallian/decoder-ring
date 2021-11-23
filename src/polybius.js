// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //create a code index for each letter
  const encoder = {
    "a": "11",
    "b": "21",
    "c": "31",
    "d": "41",
    "e": "51",
    "f": "12",
    "g": "22",
    "h": "32",
    "i": "42",
    "j": "42",
    "k": "52",
    "l": "13",
    "m": "23",
    "n": "33",
    "o": "43",
    "p": "53",
    "q": "14",
    "r": "24",
    "s": "34",
    "t": "44",
    "u": "54",
    "v": "15",
    "w": "25",
    "x": "35",
    "y": "45",
    "z": "55",
  };
  const decoder = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input, encode = true) {
    
    if(!input || typeof input !== "string") return false; //testing there is an input and that it is a string.
    //split input into individual letters
    let newInput = input.toLowerCase().split("");
    if(newInput.includes("0"||"6"||"7"||"8"||"9")) return false; //testing if all the numbers are within the cipher.
    if (encode) {
      return newInput.reduce((acc, char)=>{ //loop through newInput
        const code = char.charCodeAt(); //convert each character to its UTF code
        if(code >= 97 && code <=122){ // test to make sure code is within alphabet
          return `${acc}${encoder[char]}` //if it is, return the acc + the encoded char
        }
        return `${acc}${char}` //returns acc+char (meant for spaces or other symbols)
      }, "");
    } 
      //decoding
      let result = ""
      const test = newInput.reduce((acc, char) => {
        return char !== " " ? acc + 1 : acc; //testing to make sure numbers are even.
      }, 0);
      if (test % 2 !== 0) return false;
      for (let i = 0; i < newInput.length; i += 2) { //loop through newInput, going through it 2 at a time
        //loop through in sets of 2.
        if (newInput[i] !== " ") { //if newInput isn't a space
          const coded = newInput[i] + newInput[i + 1]; // coded becomes the number looped through, and the next number.
          const decoded = decoder[coded]; 
          result = `${result}${decoded}`; //add decoded to result
        } else {
          i += 1; //if it is a space, move i forward 1 then do the same thing.
          const coded = newInput[i] + newInput[i + 1];
          const decoded = decoder[coded];
          result = `${result} ${decoded}`; //adds a space in, to keep the string correct.
        }
      }

      return result;
    }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
