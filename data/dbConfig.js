//Create database configuration file

const knex = require('knex');
const config = require('../knexfile').development;

module.exports = knex(config); 