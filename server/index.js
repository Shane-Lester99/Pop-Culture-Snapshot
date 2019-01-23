require('dotenv').config();
const express = require('express');
const body_parser = require('body-parser');
const app = express();
const { db } = require('./models');
const path = require('path');
const port = process.env.PORT || 3000;
const todaysData = require('./initializer.js') 

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.use(body_parser.json());
app.use('/api', require('./api'));

db.sync({force: true}).then( async () => {
    console.log("DB synced!")
     await todaysData();
    console.log("Data has been collected for todays trends!")

});


app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
