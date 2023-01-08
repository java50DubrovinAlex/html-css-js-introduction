
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


function evenAscOddDesc(array){

    const res = array.sort(function(elm1, elm2){
        let isFirstEven = !(elm1 % 2) ? 1 : 2 ;
        let isSecondEven = !(elm2 % 2) ? 1 : 2 ;
        let res = isFirstEven - isSecondEven;
        if(!res && isFirstEven == 2){
            res = elm2 -  elm1;
       }else
        if(!res){
            res = elm1 - elm2;
        }  
        
        return res;

    });
    return res; 
}

console.log(`evenAscOddDesc([20,-10,333,1000, 552, 7,-7]) ${evenAscOddDesc([20,-10,333,1000, 552, 7,-7])}`);
console.log(`evenAscOddDesc([5, 4, 3, 2, 1, -1, 6]) ${evenAscOddDesc([5, 4, 3, 2, 1, -1, 6])}`);


function getMin(array) {
    const res = array.reduce(function(min, cur){
        return min = min > cur ? min = cur : min ;
        
    });
    return res;
}

console.log(`getMin([1, 2, 3, 4, 5]) ${getMin([1, 2, 3, 4, 5])}`);

function getMax(array) {
    const res = array.reduce(function(max, cur){
       return max = max < cur ? max = cur : max ;
        
    });
    return res;
}

console.log(`getMax([1, 2, 3, 4, 5]) ${getMax([1, 2, 3, 4, 5])}`);

function getAverage(array){
    const res = array.reduce(function(ave, cur, index){
        ave = ave + cur;
        return index  == array.length - 1  ? ave / array.length : ave;
        
    });
    return res;
}


console.log(`getAverage([1, 2, 3, 4, 5]) ${getAverage([1, 2, 3, 4, 5])}`);

function getMinMaxAvg(array){

    
    const res = array.reduce(function(res, cur, index){
        let ave = 0;
        let min;
        let max;
    
        if(index == 1){
        ave =res + cur ;
        min = Math.min(res, cur);
        max = Math.max(cur, res);
        res = [min, max,  ave];
        } else {
        ave = cur + res[2];    
        min = Math.min(res[0], cur);
        max = Math.max(res[1], cur);
        res = [min, max, ave] ;     
        }
        

        return index == array.length - 1 ? res = [min, max, Math.trunc(ave/array.length)] : res;
    });
    return res;
}

console.log(`getMinMaxAvg([222, 2, 3, 4, 111]) ${getMinMaxAvg([222, 2, 3, 4, 111])}`);
console.log(`getMinMaxAvg([5, 4, 3, 2, 1]) ${getMinMaxAvg([5, 4, 3, 2, 1])}`);





