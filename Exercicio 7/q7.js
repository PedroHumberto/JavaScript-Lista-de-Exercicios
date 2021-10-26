function saudation(today){
    
    if(today.getHours() < 12){
        console.log("Good Morning")
    }
    else if (today.getHours() > 12 && today.getHours() < 19){
        console.log("Good Afternoon")
    }
    else{
        console.log("Good Evening")
    }
}



var today = new Date()
saudation(today)


