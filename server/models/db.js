

const Sequelize = require('sequelize');

let db;

if (process.env.DATABASE_LOGIN) { 
    console.log('USING DEVELOPERS DB');
    db = new Sequelize(process.env.DATABASE_LOGIN);
} else {
    console.log('USING PRODUCTION DB', process.env.DATABASE_URL);
    //db = new Sequelize(config.database, config.username, config.password, config)
    db = new Sequelize(process.env.DATABASE_URL);
}


module.exports = db;
