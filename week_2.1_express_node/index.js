// the fs is a module which has all the logic written to read a file
// node package manager
// if we have ^ before package name means the package can also be of greater version 
// query params starts with ? example url http://localhost:3000/b?name=utkarsh
// app.use() global middleware
// middleware is used for global logic which is used in most routes
// if app.use(express.json()) is not used then we will get undefined for req.body
// status code mdn
// most of the time json object is returned from api response
// read clearly try to find spelling mistakes 
// on google page if simple text page is while but if json object is there then the background color in black 
// we can also send a html file directly by using sendFile
// server can talk to different servers 



const fs = require("fs");
function callbackFn(err, data){
    console.log(data);
}
fs.readFile("index.txt", "utf-8", callbackFn)
// fs.readFile("index.txt","utf-8").then(callbackFn)

const express = require('express')
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/a", (req, res)=> {
    res.send("aaaaaa")
})

// params 
app.get("/b/:a", (req, res)=> {
    res.send(req.params.a)
})

// post request 
app.post("/postcheck", (req, res)=> {
    console.log(req.body)
    console.log(req.headers)
    res.json(req.body)
})

app.post("/cal", (req, res)=>{
    let num = req.body.num
    if(num >100)
    {
        res.status(411).send("You have send a big number")
    }
    else res.status(200).json("ok")
})

// render html 
app.get("/html",(req, res)=>{
    res.send({"sdf":"sdfds"})
    res.send("ok")
    res.send(`<head>
    <title>
        Hello from page
    </title>
</head>
<body>
    
    <b>hi there</b>
</body>`)
})

// send file directly
app.get("/html2", (req, res)=> {
    res.sendFile(__dirname + "/index.html")                                // sendFile
})

// sending object
app.get("/obj", (req, res)=>{
    res.json({"name": "pokemon"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

