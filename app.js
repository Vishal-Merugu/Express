const http = require('http');

const express = require('express');
const app = express()
app.use((req,res,next)=>{
    console.log('im in first middleware');
    next();//allows the request to move to the next middleware in the line

})

app.use((req,res,next)=>{
    res.send("<h1>Hello from Express</h1>")
})

app.listen(3000); //this does the same as http.createServer + server.listen 