const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/users', userController.getUsers);

router.get('/user/:userId',userController.getUser)

router.post('/user',userController.postUser);

router.delete('/user/:userId',userController.deleteUser);

router.put('/user/:userId',userController.editUser);

module.exports = router;