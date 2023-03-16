
const express = require('express');

const contactController = require('../controllers/contact')

const adminData = require('./admin');

const router = express.Router();

router.get('/contact-us',contactController.getContact);

router.post('/success',contactController.postSuccess);

module.exports = router;