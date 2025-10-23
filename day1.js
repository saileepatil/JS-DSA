// arr = unsorted = [1,2,3,4,5,4,3,1,5,7,8,9]
// count largest sum of consecutive digit
// num = 3
// sum = 29

function findLargest(arr , num){
if(num >  arr.length){
throw new Error('num is not greater')
}else{
    let max = 0;
    for(let i = 0; i < arr.length - num + 1 ; i++){
     let temp = 0;
     for(let j = 0; j < num ; j++){
     temp += arr[i + j]
     }
     if(temp > max){
      max = temp
     }
    }
    return max
}
}
const result = findLargest([1,2,3,4,5,4,3,1,5,7,8,9] , 3)
console.log(result);