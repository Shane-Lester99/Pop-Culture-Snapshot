const router = require('express').Router();
const { TvTable, MovieTable } = require('../models');
router.get('/:someDate', async (req, res, next) => {
    console.log(req.params.someDate);
    let jsonReturn = {};
    let flagNum = 0;
    try {
        var tvObjs = await TvTable.findAll({where : { "date" : req.params.someDate }  
        })
        .then ((rows) => {
            console.log(rows);
            //res.status(200).send(rows);
            jsonReturn.tvData = rows;
            flagNum +=1;
            //res.send(jsonReturn);
        })
        .catch( (err) => {
            //res.status(500).send("nn");
            flagNum += 1;
            jsonReturn.tvData = null;
        })
    } 
    catch(err) {
        console.log('oh no!');
        //res.status(500).send(err);
        flagNum += 1;
        jsonReturn.tvData = null;
    }
    try {
        var movieObjs = await MovieTable.findAll({where : { "date" : req.params.someDate }  
        })
        .then ((rows) => {
            console.log(rows);
            //res.status(200).send(rows);
            flagNum += 1;
            jsonReturn.movieData = rows;
        })
        .catch( (err) => {
            //res.status(500).send("nn");
            flagNum += 1;
            jsonReturn.movieData = null;
        })
    } 
    catch(err) {
        flagNum += 1;
        console.log('oh no!');
        //res.status(500).send(err);
        jsonReturn.movieData = null;
    }
    const intervalId = setInterval(() => {
        if (flagNum >= 2) {
            clearInterval(intervalId);
            res.status(200).send(jsonReturn);
        }
    }, 1000) 
});

/*
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
*/
module.exports = router;
