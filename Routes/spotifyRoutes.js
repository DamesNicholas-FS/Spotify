const express = require('express');
const spotifyContoller = require('../controllers/spotifyControllers');

const router = express.Router();

router.get('/login', spotifyContoller.login);
router.get('/status', spotifyContoller.status);
router.get('/search', spotifyContoller.search);

module.exports = router;