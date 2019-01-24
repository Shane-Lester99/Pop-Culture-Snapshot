// This module holds the db table for Youtube media objects

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
    channelTitle : Sequelize.STRING,
    vidId: Sequelize.STRING,
    description: Sequelize.TEXT,
    date: Sequelize.DATEONLY,
    type: {
        type: Sequelize.STRING,
        defaultValue: "youtube"
    }

}, {timestamps: false});

module.exports = Youtube;
