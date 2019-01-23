const router = require('express').Router();
const { UserTable, UserFavTrendsTable, MovieTable, YoutubeTable, TvTable } = require('../models');
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

router.get('/:user', (req, res, next) => {
   let jsonData = {};
   UserTable.findOne( {
        where : {
            accountName : req.params.user  
        }
    })
    .then( (accountData) => {
        console.log("Then 1");
        if (!accountData) {
            res.status(404).send();
        } 
        jsonData.user = accountData;
        UserFavTrendsTable.findAll( {
            where: {
                accountName : req.params.user
            }
        })
        .then( (mediaObjs) => {
            console.log("Then 2");
            jsonData.savedMedia = [];
            if (mediaObjs.length === 0) {
                
                res.status(200).send(jsonData);
                next();
            }
            //console.log(typeof(mediaObjs), mediaObjs);
            //res.status(200).send(mediaObjs);
            //res.status(200).send(jsonData); 
            //next();
            
            //let flag = 0;
            const allItemsLength = mediaObjs.length;
            mediaObjs.forEach( (oneMediaObj) => {
                let correctTable;
                console.log(oneMediaObj.type);
                switch(oneMediaObj.type) {
                    case "movie":
                        correctTable = MovieTable;
                    break;
                    case "tv":
                        correctTable = TvTable;
                    break;
                    case "youtube":
                        correctTable = YoutubeTable;
                    break;
                    case "twitter":
                        res.status(404).send("Twitter not yet implemented")
                        next();
                    break;
                    case "music":
                        res.status(404).send("Music not yet implemented");
                        next();
                    break;
                    default:
                    console.log("ERR 1");
                    res.status(500).send("Invalid media object.");
                    next();
                }
                //console.log(correctTable);
                //res.status(200).send();
                //next();
                
                correctTable.findOne({
                    where: {
                        id : oneMediaObj.mediaObjId
                    }
                })
                .then( (queriedMediaObj) => {
                    console.log("then 3");
                    //console.log(queriedMediaObj);
                  
                    jsonData.savedMedia.push(queriedMediaObj);
                    if (jsonData.savedMedia.length === allItemsLength) {
                        res.status(200).send(jsonData);
                        next();
                    }
                    //console.log(jsonData) 
                    //res.status(200).send();
                    //next();
                })
                .catch( (err) => {
                    console.log("ERR 2");
                    res.status(500).send();
                    next();
                });
            });
            //res.status(200).send(jsonData);
           
        })
        .catch( (error) => {
            console.log("ERR 3");
            res.status(500).send(error);
        });
        //res.status(200).send(data);
        
    })
    .catch( (error) => {
        console.log("ERR 4");
        res.status(500).send(error);
    });
    
})



router.put('/', (req, res, next) => {
//    console.log(req.body);
    const { accountName, mediaObjs } = req.body;
    var accountExists = true;
    UserTable.findOne( { 
        where : {
            accountName
        }
    })
    .then( (row) => {
        if (row === null) {
            //console.log("We hit null");
            //res.status(404).send("not found");
            accountExists = false;
           // console.log(accountExists);
        }
    })
    .then ( async () => {
        if (accountExists) {
            await UserFavTrendsTable.destroy( {
                where : {
                    accountName
                }
            })
        }
    })
    .then ( () => {

        //console.log(accountExists);
        if (accountExists) {
            mediaObjs.forEach( async (mediaItem) => {
                const newItem = {
                    accountName,
                    type: mediaItem.type,
                    mediaObjId: mediaItem.id
                 };
                await UserFavTrendsTable.create(newItem);
            })
            res.status(204).send();
        } else {
            res.status(404).send();
        }

    })
    .catch( (err) => {
        console.log("error");
    })
})

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
