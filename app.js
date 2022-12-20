// let a =2;
// let num = 3/2;
// num = Math.floor(num);
// // num = Math.trunc(num); // celo4islennoe delenie
// // num = Math.ceil(num);
// // num = Math.round(num);
// //num **= 2; // vozvedenie v stepen
// //console.log(num);

// // strings

// let str ="a'bc'd";
// let str1 = 'a"bc"d';
// let res = "123" + 56;
// let res1 = "123" - 56;
// let res2 = "123" / 56;
// let res3 = "123" / "2";
// let res4 = "ab" / 8;

// // preobrazovanie string v 4islo

// let res6 = +"123" + 56;

// // boolean

// let res7 = true + true;

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

