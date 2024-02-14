const express = require('express');
const userController = require('../controllers/userController.js')
const profileController = require('../controllers/profileController.js')

const router = express.Router();

//gets all of the profiles to send to frontend
router.get('/', userController.getUsers, (req, res) => {
  res.sendStatus(200);
});

//add profile info to about you table in database
router.post('/', profileController.createAboutInfo, (req, res) => {
  res.sendStatus(200);
});

router.post('/about', profileController.getAboutInfo, (req, res) => {
  res.status(200).json({about_you: res.locals.about_you})
})

//updates profile info in about you table
router.patch('/', profileController.updateAboutInfo, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;