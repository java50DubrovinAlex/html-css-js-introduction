function getDigitFromNumber(number){
    let result = 0;
    result = number % 10;
    return result;
      
}

function getSumOfDigitInNumber(number){
   number = Math.floor(number);
   let sum = 0;
    while(number / 10 != 0){
        
        sum += getDigitFromNumber(number);
        number = Math.floor (number / 10);
    }
    return console.log(sum);
}
//getSumOfDigitInNumber(123);
//getSumOfDigitInNumber(123.5);

function printAnanas(){
    const A = String.fromCharCode(78)
    let ananas =  "A" + A + "A" + A + "A" + "S";
    return console.log(ananas.toLocaleLowerCase());
}

// printAnanas();

function resultOfExpression(exspression){
    return console.log(eval(exspression));
}
//resultOfExpression((20*50-(500+300))**2);

function reversAnyNumber(number){
    number = Math.floor(number);
    let result;
    if(number == 0){
        return console.log("0");
    } 
    if(number < 0){
        result = "-";
        number *= -1;
    } else {
        result ="";
    }
    
    while(number / 10){
        result += getDigitFromNumber(number);
        number = Math.floor (number / 10);

    }
    return console.log(result);

}
//reversAnyNumber(-123);