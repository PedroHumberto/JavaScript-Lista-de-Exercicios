function aprovedOrReproved(media) {

  if (media >= 7 && media < 10) {
    return console.log("Aproved!")
  }
  else if (media < 7) {
    return console.log("Reproved!")
  }
  else if (media = 10) {
    return console.log("Aproved with distintion!")
  }
}

let note1 = parseFloat(prompt("Type Note One"));
let note2 = parseFloat(prompt("Type Note Two"));

var media = (note1 + note2) / 2

aprovedOrReproved(media)