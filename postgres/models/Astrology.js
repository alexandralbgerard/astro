const Sequelize = require('sequelize');
const db = require('../db');

// Create the User Schema.
const AstroSchema = db.define('Astrology', {
  sign: {
    type: Sequelize.STRING,
  },
  dates: {
    type: Sequelize.STRING,
  },
});

module.exports = AstroSchema;
