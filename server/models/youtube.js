const db = require("./db");
const Sequelize = require('sequelize');

const Youtube = db.define('youtube', {
    title: Sequelize.STRING,
    channelId : Sequelize.STRING,
    thumbnail : {
        type: Sequelize.STRING,
        defaultValue: 'server/images/default_youtube_icon.svg',
        allowNull: false
    },
    vidId: Sequelize.STRING,
    description: Sequelize.TEXT,
    date: Sequelize.DATEONLY
}, {timestamps: false});

module.exports = Youtube;
