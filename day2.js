
function countUnique(arr){
if(arr.length > 0){
let i = 0;

for(let j =1 ; j < arr.length ; j++){
if(arr[i] !== arr[j]){
i++;
arr[i] = arr[j]
}
}
return i+1
}else{
    throw new Error('Array is empty')
}
}
const result = countUnique([1,1,2,3,4,5,2,4]);
console.log(result);