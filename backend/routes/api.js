// Dependencies
const express = require('express');
const router = express.Router();

const apiHome = require('../controller/apiHome');
const puzzleInit = require('../controller/puzzleInit');
const badgeInit = require('../controller/badgeInit');
const photo = require('../controller/photo');
const auth = require('../controller/auth');

// API
// Base API Route
router.get('/', apiHome.getApi);
router.post('/', apiHome.postApi);

//Badges and Puzzles Creation
router.post('/create/puzzle', puzzleInit.puzzle);
router.post('/create/badge', badgeInit.badge);
router.post('/photo/upload', auth.verifyToken, photo.uploadPhoto);
router.post('/photo/vote', auth.verifyToken, photo.votePhoto);


router.post('/auth/signup', auth.register);
router.post('/auth/login', auth.login);

module.exports = router;
