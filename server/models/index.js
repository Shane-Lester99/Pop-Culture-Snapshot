//const Students = require('./students');
//const Campuses = require('./campuses');
const UserTable = require('./user');
const YoutubeTable = require('./youtube');
const TvTable = require('./tv');
const MovieTable = require('./movie');

const db = require('./db');

//UserTable.belongsToMany(YoutubeTable, { through: 'users_Favorite_Trends'});
//YoutubeTable.belongsToMany(UserTable, {through: 'users_Favorite_Trends'});

//UserTable.belongsToMany(MovieTable, { through: 'users_Favorite_Trends'});
//MovieTable.belongsToMany(UserTable, {through: 'users_Favorite_Trends'});

//UserTable.belongsToMany(TvTable, { through: 'users_Favorite_Trends'});
//TvTable.belongsToMany(UserTable, {through: 'users_Favorite_Trends'});
//Campuses.hasMany(Students);
//Students.belongsTo(Campuses);

module.exports = {
    db,
    UserTable,
    YoutubeTable,
    TvTable,
    MovieTable
}
