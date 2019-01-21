const db = require("./db");
const Sequelize = require('sequelize');

const User = db.define('User', {
    accountName: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    userPhoto : {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'server/images/default_user.svg',
    },
    description : {
        type: Sequelize.STRING,
        allowNull: false,
        defaultVale: "",
        validate : {
            len: [0, 150]
        }
    },
    password : {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;
