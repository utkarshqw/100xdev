// Write a function "higherOrder" that takes a callback function as an argument inside "higherOrder", call the callback function synchronously

// what is a callback function 
// Ans. A callback function is a function which is passes in another function as an argument
// what is the diff btw HOF and callback function 
// Ans. 
// what is the difference between callback function and a normal function 


function higherOrder(callback){
console.log("yes")
callback()
}

function dummy(){
    console.log("hello world")
}

higherOrder(dummy)


