const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
})

router.post('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-success.html'))
})

module.exports = router;