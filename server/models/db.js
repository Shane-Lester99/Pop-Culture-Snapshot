

const Sequelize = require('sequelize');

let db;

if (process.env.DATABASE_LOGIN) { 
    console.log('USING DEVELOPERS DB');
    db = new Sequelize(process.env.DATABASE_LOGIN);
} else if (process.env.DATABASE_URL) {
    console.log('USING PRODUCTION DB', process.env.DATABASE_URL);
    //db = new Sequelize(config.database, config.username, config.password, config)
    db = new Sequelize(process.env.DATABASE_URL);
} else {
    console.error("DB CONFIG ERROR. Neither developer nor production database has a configuration url. Exiting.");
    process.exit(1);
}


module.exports = db;
