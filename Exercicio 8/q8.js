function triangle(sideX, sideY, sideZ) {
    if (sideX + sideY < sideZ || sideX + sideZ < sideY || sideZ + sideY < sideX) {
        console.log("It isn't a Triangle") //test if this is a triangle
    }
    else if (sideX == sideY && sideX == sideZ) {
        console.log("It's an Equilateral Traingle")
    }
    else if (sideX == sideY || sideX == sideZ || sideY == sideZ) {
        console.log("It's an Isosceles Triangle")
    }
    else {
        console.log("It's an Scalene Triangle")
    }
}

let sideX = parseFloat(prompt("Type the value of the side X"))
let sideY = parseFloat(prompt("Type the value of the side Y"))
let sideZ = parseFloat(prompt("Type the value of the side Z"))

triangle(sideX, sideY, sideZ)