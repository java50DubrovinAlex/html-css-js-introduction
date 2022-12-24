
function myParseInt(str, base) {
    base = base || 10;
    let res = 0;
    let strFirstSymbolAscii = str.charCodeAt(0);
    let baseSymbolAscii = getSymbol(base);
    baseSymbolAscii = baseSymbolAscii.charCodeAt(0);
    if(strFirstSymbolAscii > baseSymbolAscii){
        res = res / "";
    }
    let isPositiv = true;
    if(str[0] == "-"){
        isPositiv = false;
        str = str.substring(1); 
    }
    for(let i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) >= baseSymbolAscii || str.charCodeAt(i) < "1".charCodeAt()){
            break;
        }
     res = res * base + getCode(str[i]);
    } 
   return isPositiv  ? res : res *= -1;
}
function getCode(symbol) {
    symbol = symbol.toLowerCase();
    const codeA = 'a'.charCodeAt();
    const res = symbol <= '9'? +symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}

let str1 = "123";
let str2 = "-123m";
let str22 = "123.5";
let str3 = "-ffz";
let str4 = "-123";
let str5 = "-123";

let num = parseInt(str1);
let myNum = myParseInt(str1);
num = parseInt(str2);
myNum = myParseInt(str2);
num = parseInt(str22);
myNum = myParseInt(str22);
num = parseInt(str3, 16);
myNum = myParseInt(str3, 16);
num = parseInt(str4);
myNum = myParseInt(str4);
num = parseInt(str5, 3);
myNum = myParseInt(str5, 3);



function myToString(number, base) {
    let isPositiv;
    number > 0 ? isPositiv = true : isPositiv = false;
    let res ;
    isPositiv  ? res = "" : res = "-";
    base = base || 10;
    number = Math.abs(number);
    number = "" + number;
    const fullNumber = number.split(".");
    let numberStart = fullNumber[0] * 1;
    let numberEnd = fullNumber[1] * 1;
    res = res + foo(numberStart, base);
    numberEnd > 0 ? res = res + "." + foo(numberEnd, base) : res;
    return res;
}
function foo(number, base){
    let result = "";
    do {
        const digit = number % base;
        const symbol = getSymbol(digit);
        result = symbol + result;
        number = Math.trunc(number / base);


    }while(number);
    return result;
    // return isPositiv ? result : result = "-" + result;

}
function getSymbol(digit) {
    const codeA = 'a'.charCodeAt();
    let symbol;
   if(digit < 10) {
    symbol = "" + digit;
   } else {
     const codeAscii = digit - 10 + codeA;
     symbol = String.fromCharCode(codeAscii);
   }
   return symbol;

}
let num100 = -123;
let str100 = num100.toString();
let myStr100 = myToString(num100);
let num101 = 123.45;
str100 = num100.toString();
myStr100 = myToString(num100);
num102 = 123;
str100 = num100.toString();
myStr100 = myToString(num100);


console.log("########## parseInt ##########");
console.log(parseInt(str1));
console.log(parseInt(str2));
console.log(parseInt(str22));
console.log(parseInt(str3, 16));
console.log(parseInt(str4));
console.log(parseInt(str5, 3));
console.log("########## myParseInt ##########");
console.log(myParseInt(str1));
console.log(myParseInt(str2));
console.log(myParseInt(str22));
console.log(myParseInt(str3, 16));
console.log(myParseInt(str4));
console.log(myParseInt(str5, 3));

console.log("########## toString ##########");
console.log(num100.toString());
console.log(num101.toString());
console.log(num102.toString());
console.log("########## myToString ##########");
console.log(myToString(num100));
console.log(myToString(num101));
console.log(myToString(num102));