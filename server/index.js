// This file syncs the database, enables the correct port to listen to requests,
// configues the local secrets file, and turns the application into an express
// application. It also configures the client side code to use its static assets.
// Lastly it sets up routing and allows for JSON parsing throughout application.
// This is the bootstrap script.

require('dotenv').config();
const express = require('express');
const body_parser = require('body-parser');
const app = express();
const { db } = require('./models');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(body_parser.json());
app.use('/api', require('./api'));

db.sync({force:true}).then( () => {
    console.log("DB synced!")
}); 

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
