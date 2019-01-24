// Table to hold associations of users favorite media objects

const db = require("./db");
const Sequelize = require('sequelize');

const UserFavoriteTrendsTable = db.define('user_favorite_trends', {
    accountName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.ENUM('youtube', 'music', 'tv', 'movie', 'twitter'),
        allowNull: false
    },
    mediaObjId : { 
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {timestamps: false});

module.exports = UserFavoriteTrendsTable;
