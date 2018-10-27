// Dependencies
const express = require('express');
const router = express.Router();

const apiHome = require('../controller/apiHome');
const puzzleInit = require('../controller/puzzleInit');
const badgeInit = require('../controller/badgeInit');
const auth = require('../controller/auth');

// API
// Base API Route
router.get('/', apiHome.getApi);
router.post('/', apiHome.postApi);

//Badges and Puzzles Creation
router.post('/create/puzzle', puzzleInit.puzzle);
router.post('/create/badge', badgeInit.badge);






module.exports = router;
