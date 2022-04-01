function palindrome(str) {
    let string = str
      .toLowerCase()
      .match(/[0-9a-z]/g, '')
      .reverse();
    return string.join('') === string.reverse().join("");
  }
  palindrome("race car");