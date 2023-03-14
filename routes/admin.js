const express = require('express');

const router = express.Router();

// /admin/add-products but /admin is filtererd in app.js
router.get('/add-product',(req,res,next)=>{
    // res.send("<h1>This is Add Product Page</h1>");
    res.send("<html><body><form method = 'POST' action = '/admin/add-product' ><label>Product</label><input type = 'text' name = 'product' autofocus = 'on' ><label>Size</label><input type = 'number' name = 'size' ><button type = 'submit'>ADD ITEM</button></form></body></html>")
})

// same here also /admin is filtered in app.js
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})


module.exports = router;