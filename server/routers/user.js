const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

//creates new user
router.post('/create', userController.createUser, (req, res) => {
  res.sendStatus(200).json({ message: 'User created' });
});

//deletes current user
router.delete('/delete', userController.deleteUser, (req, res) => {
  res.sendStatus(200)
});

router.post('/verify', userController.verifyUser, (req, res) => {
  res.status(200).json({verification: res.locals.verification})
});

//updates user info
router.patch('/update', userController.updateUser, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;