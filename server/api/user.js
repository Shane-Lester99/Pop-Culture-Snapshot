const router = require('express').Router();
const { User } = require('../models');
router.get('/', async (req, res, next) => {
    try {
        var users = await User.findAll()
        .then ((rows) => {
            console.log(rows);
            res.status(200).send(rows);
        })
        .catch( (err) => {
            res.status(500).send("nn");
        })
    } 
    catch(err) {
        console.log('oh no!');
        res.status(500).send(err);
    }
});

// TODO: Pass in as request body, not as query string!
router.post('/', async (req, res, next) => {
    let { accountName, userPhoto, description, password} = req.query;
    //console.log(firstName, lastName, email, imageUrl, gpa);
    try {   
        await User.create({
            accountName,
            userPhoto, 
            description,
            password
        })
        .then( () => {
            res.status(200).send("Success");
         })
        .catch( (err) => {
            res.status(500).send("Server error");
         });
    }
    catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
