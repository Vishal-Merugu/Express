const Sequelize = require('sequelize');

const sequelize = new Sequelize('users', 'root','Vishal@360',{
    dialect : "mysql",
    host : 'localhost'
});

module.exports = sequelize;