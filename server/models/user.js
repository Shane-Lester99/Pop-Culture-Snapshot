const db = require("./db");
const Sequelize = require('sequelize');

const User = db.define('user', {
    accountName: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    userPhoto : {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
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
}, {timestamps: false});

module.exports = User;
