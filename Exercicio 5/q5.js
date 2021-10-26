var letter = prompt("Enter a letter");
let vowels = ['a', 'e', 'i', 'o', 'u']

function typeOfLetter(letter) {
    if (vowels.includes(letter.toLowerCase())) {
        return console.log(`The letter: ${letter} is a vowel`);
    }
    else {
        return console.log(`The letter: ${letter} is a consonant`);
    }
}

typeOfLetter(letter)