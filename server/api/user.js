const router = require('express').Router();
const { UserTable } = require('../models');
router.get('/', async (req, res, next) => {
    try {
        var users = await UserTable.findAll()
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
    //console.log(req.body);
    
    let { accountName, userPhoto, description, password} = req.body;
    //console.log(firstName, lastName, email, imageUrl, gpa);
    try {   
        await UserTable.create({
            accountName,
            userPhoto, 
            description,
            password
        })
        .then( () => {
            res.status(200).send("Success");
         })
        .catch( (err) => {
            res.status(405).send("Request rejected");
         });
    }
    catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;
