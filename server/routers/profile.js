const express = require('express');

const router = express.Router();

//gets all of the profiles to send to frontend
router.get('/', (req, res) => {
  res.sendStatus(200);
});

//add profile info to about you table in database
router.post('/', (req, res) => {
  res.sendStatus(200);
});

//updates profile info in about you table
router.patch('/', (req, res) => {
  res.sendStatus(200);
});

//deletes profile info from
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;