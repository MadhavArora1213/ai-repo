const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController');

// Route to sign up for the newsletter
router.post('/signup', newsletterController.signup);

module.exports = router;