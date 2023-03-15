const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');


const app = express()

const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')
const contactRoute = require('./routes/contact-us')

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoute);
app.use('/',shopRoute);
app.use('/contact-us',contactRoute)

app.use((req,res,next) =>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})

app.listen(3000);
