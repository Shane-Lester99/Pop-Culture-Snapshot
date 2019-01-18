require('dotenv').config();
const express = require('express');
const app = express();
const { db } = require('./models');
const path = require('path');
const port = process.env.PORT || 3000;

// Hello world


app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use('/api', require('./api'));

db.sync().then( () => console.log("DB synced!")); 

app.listen(port, () => {
    console.log('App is listening on port 3000'); 
});
