function rot13(str) {
    const lookupTable = {
      A: "N",
      B: "O",
      C: "P",
      D: "Q",
      E: "R",
      F: "S",
      G: "T",
      H: "U",
      I: "V",
      J: "W",
      K: "X",
      L: "Y",
      M: "Z",
  
      Z: "M",
      Y: "L",
      X: "K",
      W: "J",
      V: "I",
      U: "H",
      T: "G",
      S: "F",
      R: "E",
      Q: "D",
      P: "C",
      O: "B",
      N: "A"
    }
    let accumulator = "";
  
    for(const letter in str) {
      if(str[letter].match(/\W/)) {
        accumulator += str[letter];
      }
      else {
        for(const key in lookupTable) {
  
        const keyValue = lookupTable[key];
  
        if(str[letter] === key) {
          accumulator += keyValue;
        }
        //console.log(keyValue);
        }
      }
      
    }
    console.log(accumulator);
    return accumulator;
  }
  
  rot13("SERR PBQR PNZC");