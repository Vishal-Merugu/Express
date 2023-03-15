const path = require('path');
const express = require('express');
const rootDir = require('../util/path')
const router = express.Router();

// /admin/add-products but /admin is filtererd in app.js
router.get('/add-product',(req,res,next)=>{
    // res.send("<h1>This is Add Product Page</h1>");
    res.sendFile(path.join(rootDir,"views", "add-product.html"))
})

// same here also /admin is filtered in app.js
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/admin/add-product')
})


module.exports = router;