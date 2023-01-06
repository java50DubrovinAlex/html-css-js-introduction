
function evenOddSort(array) {
//TODO
//sorts array of number in the order even numbers go before the oddones
//returns a sorted array
//example input array [20,-10,333,1000, 552, 7,-7] => [20,-10, 1000, 552, 333,7, -7]

const res = array.sort(function(elm1, elm2){
    let isFirstEven = !(elm1 % 2) ? 1 : 2 ;
    let isSecondEven = !(elm2 % 2) ? 1 : 2 ;
    let res = isFirstEven - isSecondEven;
    return res;

});
return res;
}

console.log (`evenOddSort([20,-10,333,1000, 552, 7,-7]) ${evenOddSort([20,-10,333,1000, 552, 7,-7])}`);

function oddEvenSort(array){

//example input array [20,-10,333,1000, 552, 7,-7] => [333, 7, -7, 20, -10, 1000, 552]
    
    const res = array.sort(function(elm1, elm2){
        let isFirstEven = !(elm1 % 2) ? 1 : 2 ;
        let isSecondEven = !(elm2 % 2) ? 1 : 2 ;
        let res = isSecondEven - isFirstEven;
        return res;

});
return res;
}

console.log (`oddEvenSort([20,-10,333,1000, 552, 7,-7]) ${oddEvenSort([20,-10,333,1000, 552, 7,-7])}`);