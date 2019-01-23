// This is for endpoint /api/daily/2019-01-22 and will display all the
// data for the homepage of site. As in it will give us all media objs
// associated for that day. This route only has a get request for 
// all the data available for a given day


const router = require('express').Router();
const { TvTable, MovieTable, YoutubeTable } = require('../models');
// Given API endpoint /api/daily/2019-01-22 will give us all the
// media objects of that day
router.get('/:someDate', async (req, res, next) => {
    console.log(req.params.someDate);
    let jsonReturn = {};
    let flagNum = 0;
    const DATA_AMOUNT = 3;
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
            jsonReturn.tvData = [];
        })
    } 
    catch(err) {
        console.log('oh no!');
        //res.status(500).send(err);
        flagNum += 1;
        jsonReturn.tvData = [];
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
            jsonReturn.movieData = [];
        })
    } 
    catch(err) {
        flagNum += 1;
        console.log('oh no!');
        //res.status(500).send(err);
        jsonReturn.movieData = [];
    }

    try {
        var youtubeObjs = await YoutubeTable.findAll({where : { "date" : req.params.someDate }  
        })
        .then ((rows) => {
            console.log(rows);
            //res.status(200).send(rows);
            flagNum += 1;
            jsonReturn.youtubeData = rows;
        })
        .catch( (err) => {
            //res.status(500).send("nn");
            flagNum += 1;
            jsonReturn.youtubeData = [];
        })
    } 
    catch(err) {
        flagNum += 1;
        console.log('oh no!');
        //res.status(500).send(err);
        jsonReturn.youtubeData = [];
    }
    // Waits until all 3 async/awaits are done before returning
    // JSON data with a 200
    const intervalId = setInterval(() => {
        if (flagNum >= 3) {
            clearInterval(intervalId);
            res.status(200).send(jsonReturn);
        }
    }, 1000) 
});

module.exports = router;
