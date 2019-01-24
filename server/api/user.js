// This will allow us to create, update, and post user data. 
// TODO: Add feature to delete user accounts
// TODO: Add encrypted authentication

const router = require('express').Router();
const { UserTable, UserFavTrendsTable, MovieTable, YoutubeTable, TvTable } = require('../models');


// This will be for our login. Currently insecure but okay for beta.
router.get('/:user/:password', (req, res, next) => {
    UserTable.findOne({
        where : {
            accountName : req.params.user,
            password : req.params.password
        }
    })
    .then( (row) => {
        if (row) {
            res.status(200).send();
        } else {
            res.status(404).send();
        }
    })
});

/* THIS ROUTE IS ONLY FOR TESTING PURPOSES. IT RETURNS ALL THE USER DATA.
 * IT IS EXTREMELY INSECURE AND SHOULD ONLY BE USED IN TESTS.
// Will return all the users as JSON without associated media objs.
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
*/

// Will be able to get user data given accountName. Includes
// associated media objects
router.get('/:user', (req, res, next) => {
   let jsonData = {};
   UserTable.findOne( {
        where : {
            accountName : req.params.user  
        }
    })
    .then( (accountData) => {      
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
            jsonData.savedMedia = [];
            if (mediaObjs.length === 0) {
                res.status(200).send(jsonData);
                next();
            } 
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
                        res.status(500).send("Invalid media object.");
                        next();
                }
                correctTable.findOne({
                    where: {
                        id : oneMediaObj.mediaObjId
                    }
                })
                .then( (queriedMediaObj) => { 
                    jsonData.savedMedia.push(queriedMediaObj);
                    if (jsonData.savedMedia.length === allItemsLength) {
                        res.status(200).send(jsonData);
                        next();
                    }
                })
                .catch( (err) => { 
                    res.status(500).send();
                    next();
                });
            }); 
        })
        .catch( (error) => { 
            res.status(500).send(error);
        }); 
    })
    .catch( (error) => { 
        res.status(500).send(error);
    });
    
})

// Updates the data of specific user 
router.put('/', (req, res, next) => { 
    const { accountName, description, userPhoto,  mediaObjs } = req.body;
    var accountExists = true;
    UserTable.findOne( { 
        where : {
            accountName
        }
    })
    .then( (row) => {
        if (row === null) {
            accountExists = false; 
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
    .then (async () => {
        if (accountExists) {
            await UserTable.update({
                description, 
                userPhoto
            },
            {
                where : {
                    accountName
                }
            });
        } 
    })
    .then ( () => { 
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
       res.status(500).send(); 
    })
})

// Will create a new user account if the accountName doesnt already exist
router.post('/', async (req, res, next) => { 
    let { accountName, userPhoto, description, password} = req.body;
    accountName = accountName.toLowerCase();
    try {   
        await UserTable.create({
            accountName,
            userPhoto, 
            description,
            password
        })
        .then( () => {
            res.status(200).send();
            next();
         })
        .catch( (err) => {
            res.status(405).send();
            next();
         });
    }
    catch(err) {
        res.status(500).send();
        next();
    }
});

module.exports = router;
