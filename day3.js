// find square with quadratic logic

function isSquareCheck(arr1 , arr2){

    for(let i = 0; i < arr1.length - 1; i++){
let isSquare = false;

for(let j = 0 ; j < arr2.length - 1 ; j++){

    if(arr1[i] * arr1[i] === arr2[j]){
     return true
    }
    if(j === arr2.length - 1){
  if(!isSquare){
  return false
  }
    }
}
    }
    return true
}
const result = isSquareCheck([1,2,1], [1,4,1])
console.log(result);