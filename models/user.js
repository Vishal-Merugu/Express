const Sequelize = require('sequelize');

const sequelize = require('../util/usersdatabse');

const User = sequelize.define('users',{
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    },
    phone : {
        type : Sequelize.STRING,
        allowNull : false
    }
})

module.exports = User;