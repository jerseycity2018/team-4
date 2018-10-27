// Dependencies
const express = require('express');
const router = express.Router();

const apiHome = require('../controller/apiHome');
const auth = require('../controller/auth');

// API
// Base API Route
router.get('/', apiHome.getApi);
router.post('/', apiHome.postApi);

router.post('/auth/signup', auth.register);
router.post('/auth/login', auth.login);

module.exports = router;
