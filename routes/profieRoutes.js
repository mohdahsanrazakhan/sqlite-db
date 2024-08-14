const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.post('/profile', profileController.createProfile);
router.get('/profile', profileController.createProfile);

module.exports = router;