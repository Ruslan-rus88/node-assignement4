const path = require('path');

const { users } = require('./home');
const express = require('express');

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: 'Users', users })
});

module.exports = router;