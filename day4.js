// find square with linear


function checkSqure(arr1, arr2){
const map1 = {};
const map2 = {};

for(let item1 of arr1){
map1[item1] = (map1[item1] || 0) + 1;

}

for(let item2 of arr2){
map2[item2] = ( map2[item2] || 0 ) + 1

}

for(let key in map1){

   if(!map2[key * key]){
   return false
   }

   if(map1[key] !== map2[key * key]){
  return false
   }
   }
return true
}
const result = checkSqure([1,2,1] , [1,4,1])
console.log(result);
