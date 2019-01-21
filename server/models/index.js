//const Students = require('./students');
//const Campuses = require('./campuses');
const User = require('./user');


const db = require('./db');

//Campuses.hasMany(Students);
//Students.belongsTo(Campuses);

module.exports = {
    db,
    User
}
