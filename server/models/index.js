const UserTable = require('./user');
const UserFavTrendsTable = require('./user_fav_trends');
const YoutubeTable = require('./youtube');
const TvTable = require('./tv');
const MovieTable = require('./movie');

const db = require('./db');

module.exports = {
    db,
    UserTable,
    UserFavTrendsTable,
    YoutubeTable,
    TvTable,
    MovieTable
}
