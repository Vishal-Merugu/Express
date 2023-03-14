const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');
const app = express()

//this parsers the .body so that it can be retrieved
app.use(bodyParser.urlencoded({extended : false}));

// app.use('/',(req,res,next)=>{
//     console.log("this always runs");
//     next();
// })

app.use('/add-product',(req,res,next)=>{
    // res.send("<h1>This is Add Product Page</h1>");
    res.send("<html><body><form method = 'POST' action = '/product' ><label>Product</label><input type = 'text' name = 'product' autofocus = 'on' ><label>Size</label><input type = 'number' name = 'size' ><button type = 'submit'>ADD ITEM</button></form></body></html>")
})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})
//only works for post requets if we dont mention path will work for all post requests.. also has patch, put, delete, get ....


app.use("/",(req,res,next)=>{
    res.send("<h1>Hello from Express</h1>")
})

app.listen(3000); //this does the same as http.createServer + server.listen 
