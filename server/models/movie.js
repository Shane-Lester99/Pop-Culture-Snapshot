const db = require("./db");
const Sequelize = require('sequelize');

const Movie = db.define('movie', {
    title: Sequelize.STRING,
   
    voteScore : Sequelize.DOUBLE,
    posterPath : {
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
