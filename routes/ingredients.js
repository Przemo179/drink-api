const express = require('express');
const router = express.Router();
const ingredients = require('../services/ingredients');

// Get ingredients
router.get('/', async function(req, res, next) {
  try {
    res.json(await ingredients.getIngredients())
  } catch {
    console.error('Error while getting ingredients');
    next(err);
  }
});

module.exports = router;