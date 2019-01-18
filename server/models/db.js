

const Sequelize = require('sequelize');

let db;

if (process.env.DATABASE_LOGIN) { 
    db = new Sequelize(process.env.DATABASE_LOGIN);db = new Sequelize(process.env.DATABASE_LOGIN);
} else {
    db = new Sequelize(config.database, config.username, config.password, config)
}


module.exports = db;
