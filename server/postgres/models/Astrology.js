const Sequelize = require('sequelize');
const db = require('../db');

// Create the User Schema.
const AstroSchema = db.define('astrology', {
  sign: {
    type: Sequelize.STRING,
  },
  dates: {
    type: Sequelize.STRING,
  },
  element: {
    type: Sequelize.STRING,
  },
  ruler: {
    type: Sequelize.STRING,
  },
  stregnths: {
    type: Sequelize.STRING,
  },
  weaknesses: {
    type: Sequelize.STRING,
  },
  overview: {
    type: Sequelize.TEXT,
  },
});

module.exports = AstroSchema;
