const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const router = express.Router();

router.get('/',(req,res,next)=>{
    fs.readFile('messages.txt',(err,data)=>{
        if(err){
             body = 'No Messages Found'
        }else{
             body = data.toString();
        }
        res.send(`<!DOCTYPE html><html lang='/'><head> <title>Groupchat App</title></head><body> <form action='/' method='POST'> <h4>${body} </h4> <input id='message' type='text' name='message' placeholder='enter message'> <input type='hidden' name='username' id='username'> <button type='submit'>Send</button> </form> <script>document.querySelector('form').onsubmit=()=>{document.querySelector('#username').value=localStorage.getItem('username');}</script></body></html>`);
    })
    
})

router.post('/',(req,res,next)=>{
    const string = req.body
    const body = `${string.username} : ${string.message}\n<br>`
    fs.writeFile('messages.txt',body,{flag:'a'},(err)=>{
        res.redirect('/')
    })
})


module.exports = router;