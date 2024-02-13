const express = require('express');
const userController = require('../controllers/userController.js')

const router = express.Router();

//creates new user
router.post('/create', userController.createUser, (req, res) => {
  res.sendStatus(200);
});

//deletes current user
router.delete('/delete', userController.deleteUser, (req, res) => {
  res.sendStatus(200)
});

//updates user info
router.patch('/update', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;