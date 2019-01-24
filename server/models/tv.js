// Database table creater for tv media objects

const db = require("./db");
const Sequelize = require('sequelize');

const Tv = db.define('tv', {
    title: Sequelize.STRING, 
    voteScore : Sequelize.DOUBLE,
    posterPath : {
        type: Sequelize.STRING,
        defaultValue: 'server/images/default_tv_icon.svg',
        allowNull: false
    },
    overview: Sequelize.TEXT,
    date: Sequelize.DATEONLY,
    type: {
        type:Sequelize.STRING,
        defaultValue:"tv"
    }
}, {timestamps : false});

module.exports = Tv;
