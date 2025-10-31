// anagram

function isAnagram(str1, str2){
if(str1.length !== str2.length){
return false
}

const counter = {}

for(let item1 of str1 ){
counter[item1] = (counter[item1] || 0 ) + 1
}

for(let item2 of str2){
    if(!counter[item2]){
return false
    }
    counter[item2]-=1
}

return true
}

const result = isAnagram("sailee", "eelias")
console.log(result);