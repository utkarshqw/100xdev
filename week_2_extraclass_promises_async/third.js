// Implement a function "mapArray" that takes an array and a callback function as arguments. 'mapArray' should apply the callback function to each element of the array and return a new array with the modified values.
function change(elem){
    return elem + 100
}

function mapArray(array,callback){
return array.map(callback)
  
}
let array = [1, 2, 3]
console.log(mapArray(array,change))