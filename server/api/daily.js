// This is for endpoint /api/daily/2019-01-22 and will display all the
// data for the homepage of site. As in it will give us all media objs
// associated for that day. This route only has a get request for 
// all the data available for a given day

const router = require('express').Router();
const { TvTable, MovieTable, YoutubeTable } = require('../models');

const checkTodaysData = require('../initializer');

router.get('/:someDate', async (req, res, next) => {
    console.log("Checking for daily data...");
    await checkTodaysData();
    next();
});

// Given API endpoint /api/daily/2019-01-22 will give us all the
// media objects of that day
router.get('/:someDate', async (req, res, next) => { 
    // This will query the data from the database for a particular day
    let jsonReturn = {};
    // flagNum is the amount of media types we have. Currently we have
    // 3 (youtube, tv, movie). An interval will watch that variable until it hits
    // 3, then it can enter a conditional.
    let flagNum = 0;
    // This is the amount of media objects.
    const DATA_AMOUNT = 3;
    try {
        var tvObjs = await TvTable.findAll({where : { "date" : req.params.someDate }  
        })
        .then ((rows) => {
            jsonReturn.tvData = rows;
            flagNum +=1; 
        })
        .catch( (err) => {
            flagNum += 1;
            jsonReturn.tvData = [];
        })
    } 
    catch(err) { 
        flagNum += 1;
        jsonReturn.tvData = [];
    }
    try {
        var movieObjs = await MovieTable.findAll({where : { "date" : req.params.someDate }  
        })
        .then ((rows) => { 
            flagNum += 1;
            jsonReturn.movieData = rows;
        })
        .catch( (err) => { 
            flagNum += 1;
            jsonReturn.movieData = [];
        })
    } 
    catch(err) {
        flagNum += 1; 
        jsonReturn.movieData = [];
    }

    try {
        var youtubeObjs = await YoutubeTable.findAll({where : { "date" : req.params.someDate }  
        })
        .then ((rows) => { 
            flagNum += 1;
            jsonReturn.youtubeData = rows;
        })
        .catch( (err) => { 
            flagNum += 1;
            jsonReturn.youtubeData = [];
        })
    } 
    catch(err) {
        flagNum += 1;
        jsonReturn.youtubeData = [];
    }
    // Waits until all 3 async/awaits are done before returning
    // JSON data with a 200
    const intervalId = setInterval(() => {
        if (flagNum >= 3) {
            clearInterval(intervalId);
            res.status(200).send(jsonReturn);
        }
    }, 500) 
});

module.exports = router;
