function convertToRoman(num) {
    const lookupTable = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    }
    let accumulator = ""; // Accumulates number in Roman Numbers
    for(const key in lookupTable) { // itterates through every key:value in lookupTable ONCE
      const numberValue = lookupTable[key]; // stores value of current key from lookupTable
    
      while (numberValue <= num) { 
        num -= numberValue; //Subtracts value of the current key from the number we are converting to roman numbers 
        accumulator += key; //adds Key of the value that was subtracted from num to the accumulator
      }
    }
    return accumulator; // returns num as a roman number
  }
  