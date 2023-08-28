// create a function "series" that sequentially does the following. 
// Read the contents of "a.txt" using utf-8 encoding
// wait for 3 seconds
// write the contents of a.txt in b.txt
// remove any extra spacing from a.txt
// delete contents of a.txt
// delete contents of b.txt

// fs.unlike to delete a file 


const fs = require("fs");

// from chat gpt
// function series() {
//   // Read the contents of "a.txt" using utf-8 encoding
//   fs.readFile("a.txt", "utf-8", (err, data) => {
//     if (err) {
//       console.error("Error reading file a.txt:", err);
//       return;
//     }
    
//     // Wait for 3 seconds
//     setTimeout(() => {
//       // Write the contents of a.txt to b.txt
//       fs.writeFile("b.txt", data, "utf-8", (writeErr) => {
//         if (writeErr) {
//           console.error("Error writing to file b.txt:", writeErr);
//         } else {
//           console.log("Contents of a.txt written to b.txt");
//         }
        
//         // Remove extra spacing from a.txt
//         const trimmedData = data.trim();
//         // Write the trimmed data back to a.txt
//         fs.writeFile("a.txt", trimmedData, "utf-8", (trimWriteErr) => {
//           if (trimWriteErr) {
//             console.error("Error writing trimmed data to a.txt:", trimWriteErr);
//           } else {
//             console.log("Extra spacing removed from a.txt");
//           }
          
//           // Delete contents of a.txt and b.txt
//           fs.unlink("a.txt", (deleteErr) => {
//             if (deleteErr) {
//               console.error("Error deleting a.txt:", deleteErr);
//             } else {
//               console.log("a.txt deleted");
//             }
            
//             fs.unlink("b.txt", (deleteBErr) => {
//               if (deleteBErr) {
//                 console.error("Error deleting b.txt:", deleteBErr);
//               } else {
//                 console.log("b.txt deleted");
//               }
//             });
//           });
//         });
//       });
//     }, 3000);
//   });
// }

// series();
// from instructor 

function removeExtraSpace(data){
data = data.trim()
return data
}

function series(){
    fs.readFile("a.txt", "utf-8", waitCallback)
}

function waitCallback(err, data){

    function writeCallback(){
        fs.writeFile("b.txt", data, "utf-8",removeSpace)
    }

    function removeSpace(err){
        newData = removeExtraSpace(data)
        fs.writeFile("a.txt", newData, "utf-8", deleteA)
    }

    setTimeout(writeCallback, 3000)
}

function deleteA(err){
fs.writeFile("a.txt"," ", "utf-8",deleteB)
}

function deleteB(err){
fs.writeFile("b.txt"," ", "utf-8",finalCallback)
}

function finalCallback(err){
    console.log("success")
}
series()

// short version 

// function series(){
//     fstat.readFile("a.txt","utf-8",(err, data)=>{
     
//         setTimeout(()=>{
//         fs.writeFile("b.txt",data,"utf-8",(err)=>{
//          let newData = removeExtraSpace(data)
//          fs.write("a.txt",newData,"utf-8",(err)=>{
//             fs.writeFile("a.txt", "", "utf-8",(err)=>{
//                 fs.writeFile("b.txt",'',"utf-8",(err)=>{
//                     console.log("success")
//                 })
//             })
//          })
//         })
//         },3000)
//     })
// }