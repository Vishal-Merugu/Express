const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const errorController = require('./controllers/error'); 
const sequelize = require('./util/database');
const usersequelize = require('./util/usersdatabse');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact-us');
const userRoutes = require('./routes/user')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use('/booking',userRoutes)

app.use(errorController.get404);

usersequelize.sync()
.then(result => {
    app.listen(3000);
    // console.log(result);
})
.catch(err => console.log(err))

