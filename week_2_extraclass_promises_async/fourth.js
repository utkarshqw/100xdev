// write a function "filterArray" that takes an array and a a callback function as arguments. "filterArray" should filter the elements of the array bases on the condition specified by the callback function and return a new array with the filtered elements. 

function filterArray (array, callback){
 return array.filter(callback)
}

function condition(elem){
  return elem %2 == 0
}

console.log(filterArray([1,2,3,4,5,6,7,8,9], condition))