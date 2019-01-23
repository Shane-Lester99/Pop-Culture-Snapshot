const db = require("./db");
const Sequelize = require('sequelize');

const Movie = db.define('movie', {
    title: Sequelize.STRING,
    posterPath : Sequelize.STRING,
    voteScore : Sequelize.DOUBLE,
    thumbnail : {
        type: Sequelize.STRING,
        defaultValue: 'server/images/default_youtube_icon.svg',
        allowNull: false
    },
    overview: Sequelize.TEXT,
    date: Sequelize.DATEONLY,
    type: {
        type:Sequelize.STRING,
        defaultValue:"movie"
    }
}, {timestamps: false});

module.exports = Movie;
