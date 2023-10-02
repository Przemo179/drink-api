const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getIngredients() {
  const rows = await db.query(
    `SELECT label, unit 
    FROM Ingredients`
  );

  const ingredientsList = helper.emptyOrRows(rows);

  return {
    ingredientsList,
  }
}

module.exports = {
  getIngredients
}
