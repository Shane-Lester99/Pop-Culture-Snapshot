const db = require("./db");
const Sequelize = require('sequelize');

const Tv = db.define('tv', {
    title: Sequelize.STRING,
    posterPath : Sequelize.STRING,
    voteScore : Sequelize.DOUBLE,
    thumbnail : {
        type: Sequelize.STRING,
        defaultValue: 'server/images/default_youtube_icon.svg',
        allowNull: false
    },
    overview: Sequelize.STRING
}, {timestamps : false});

module.exports = Tv;
