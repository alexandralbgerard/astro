const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/Astro', {
  logging: false,
  operatorsAliases: false,
});

module.exports = db;
