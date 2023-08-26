fetch("http://localhost:3000/obj",{
    method: "GET"
}).then((res)=>res.json())
.then((res)=> console.log(res))