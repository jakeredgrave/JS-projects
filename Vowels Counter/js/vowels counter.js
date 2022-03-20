let checkButton = document.getElementById("check_button");

checkButton.addEventListener("click", check);

function check(event) {
    event.preventDefault();
    let textToCheck = document.getElementById("text_to_check").value;
    let vowelCounter = 0;
    // vowels inside regex with global and case-insensitive flags
    let vowels = /[aeoui]/gi;
    // checking every letter of textToCheck.value if it's a vowel
    for (let i = 0; i < textToCheck.length; i++) {
        if (textToCheck[i].match(vowels)) {
            vowelCounter++;
        }
        //console.log(vowelCounter);
    }
   
    if (vowelCounter > 1) {
        console.log(vowelCounter);
        alert(`There are ${vowelCounter} vowels inside this text.`);
        
    }
    
    else if (vowelCounter == 1) {
        alert(`There is 1 vowel inside this text.`);
    }
    else  {
        alert(`There aren't any vowels inside this text.`);
    }
    

    //console.log(textToCheck);
}