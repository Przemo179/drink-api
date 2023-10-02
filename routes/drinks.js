const express = require('express');
const router = express.Router();
const drinks = require('../services/drinks');

// Get ingredients
router.get('/', async function(req, res, next) {
  try {
    res.json(await drinks.getDrinks())
  } catch(err) {
    console.error('Error while getting ingredients');
    next(err);
  }
});

module.exports = router;