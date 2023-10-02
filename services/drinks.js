const db = require('./db');
const helper = require('../helper');

async function getDrinks() {
  const rows = await db.query(
    `SELECT * 
    FROM Drink_v2`   
  );

  const drinksList = helper.emptyOrRows(rows);

  return {
    drinksList,
  }
}

module.exports = {
  getDrinks
}
