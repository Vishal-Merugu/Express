const User = require('../models/user');

exports.getUsers = (req,res,next) =>{
    User.findAll()
    .then(users => {
        res.json(users)
    })
    .catch(err => console.log(err))
}

exports.getUser = (req,res,next) => {
    const UserId = req.params.userId
    User.findByPk(UserId)
    .then((user) => {
        res.json(user)
    })
    .catch(err => console.log(err))
}

exports.postUser = (req,res,next) =>{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
     User.create({
        name : name,
        email : email,
        phone : phone
    })
    .then((user) => res.send(user))
    .catch(err => console.log(err))
}

exports.deleteUser = (req,res,next) => {
    const userId = req.params.userId ;
    User.findByPk(userId)
    .then((user) =>{
        return user.destroy()
    })
    .then(() => res.send())
    .catch(err => console.log(err))
}

exports.editUser = (req,res,next) => {
    const userId = req.params.userId;
    const updatedName = req.body.name;
    const updatedEmail = req.body.email;
    const updatedPhone = req.body.phone;
    User.findByPk(userId)
    .then((user) => {
        user.name = updatedName;
        user.email = updatedEmail;
        user.phone = updatedPhone;
        return user.save()
    })
    .then((user) => {
        res.json(user)
    })
    .catch(err => console.log(err))
}

