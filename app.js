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



function getSumOfDigitInNumber(number){
   number = Math.floor(number);
    while(number / 10 != 0){
        let sum;
        sum += number % 10;
        number /= 10;
    }
    return console.log(sum);
}