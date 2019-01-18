const Sequelize = require('sequelize');



const db = new Sequelize(process.env.DATABASE_LOGIN);

module.exports = db;
