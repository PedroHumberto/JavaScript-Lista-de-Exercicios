function maxnumber(numbersarray, max){
    for (let element of numbersarray){
        if (element > max){
            max = element    
        }    
    }    
    return max
}

let numbersarray = []
for(i = 0; i < 5; i++){
    let numbers = parseFloat(prompt(`Enter the ${i + 1}º number`))
    numbersarray.push(numbers)    
}

let max = numbersarray[0]
max = maxnumber(numbersarray, max)
console.log(max)
