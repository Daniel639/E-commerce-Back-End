
require('dotenv').config({ path: '../.env' });

const Sequelize = require('sequelize');

console.log('Current working directory:', process.cwd());
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', typeof process.env.DB_PASSWORD, process.env.DB_PASSWORD ? '[HIDDEN]' : 'undefined');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT || 5432,
  logging: console.log,
  dialectOptions: {
    decimalNumbers: true,
  },
});

module.exports = sequelize;
