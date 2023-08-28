// implement a function "parallelFileOperation" that returns an array of size 2 with the first index containing the contents of the file "a.txt" in UTF-8 encoding. If "a.txt" doesn't exist, then throw an error. The second element of the array contains 1 if the text "Hello!" is successfully written to the file "b.txt" and 0 if the write operation fails.

// when there is no error then what is the value of error (ans: null)
// Here to deal with async nature we are using count and when count turns 2 we print the ans


const fs = require("fs")

function parallelFileOperation()
{   
    let count = 0
    let res = []

    fs.readFile("a.txt","utf-8",(err, data)=>{
        if(err)
        {
            throw err
        }
       res[0] = data

        count++
        if(count == 2) console.log(res)
    })

    fs.writeFile("b.txt", "Hello b text", "utf-8",(err)=>{
        if(err)
        {
            res[1] = 0
        }else res[1] = 1

        count++
        if(count == 2) console.log(res)
    })
}

parallelFileOperation()

