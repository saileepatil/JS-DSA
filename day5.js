// divide & conquere technique
// find the index of given number in a sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] => 15

// find
// -mid index (min + max)/2  
// (0+14) => 7(idx), ele = 8

// if arr[mididx] < num(7)
// min = minIdx + 1
// arr[minidx] > number
// max = minidx - 1
// minidx

function serchAlgo(arr , num){

    let min = 0;
    let max = arr.length-1;

    while(min <= max){
   let mididx = Math.floor((min + max)/2)
     
   if(arr[mididx] < num){
 min = mididx + 1
   }else if(arr[mididx] > num){
     max = mididx + 1
   }else{
     return mididx
   }
    }
    return -1
}

const result = serchAlgo([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5)
console.log(result);
