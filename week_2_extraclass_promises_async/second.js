// write a function "higherOrderAsync" that takes a callback funcgtion as an argument. Inside "higherOrderAsync" call the callback function asynchronounsly using setTieout after a delay of n seconds, where n is current day of the month according to UTC time (1 <= n <= 31) 

function higherOrderAsync(callback){
 let date = new Date()
 let currentDay =  date.getUTCDate()
 console.log(currentDay)
 setTimeout(callback,currentDay*1000)
}
function print()
{
    console.log(`print after current day *1000 seconds`)
}
higherOrderAsync(print)