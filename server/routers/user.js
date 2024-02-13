const express = require('express');

const router = express.Router();

//creates new user
router.post('/create', (req, res) => {
  res.sendStatus(200);
});

//deletes current user
router.delete('/delete', (req, res) => {
  res.sendStatus(200)
});

//updates user info
router.patch('/update', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;