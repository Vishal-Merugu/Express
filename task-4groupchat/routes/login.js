const express = require('express');

const router = express.Router();

router.get('/login',(req,res,next)=>{

    res.send("<!DOCTYPE html><html lang='/'><head> <title>Groupchat App</title></head><body> <form action='/' method='GET'> <label >Username</label> <input id='username' type='text' name='username'> <button type='submit'>Login</button> </form> <script>document.addEventListener('DOMContentLoaded',()=>{document.querySelector('form').onsubmit=()=>{const username=document.querySelector('#username').value; localStorage.setItem('username',username);}}); </script></body></html>")
})

module.exports = router;