// This module provides the logic to check if the daily trending data is loaded 
// and if it is not to call it. It will use classes in the helper modules
// to call each API. 

// WARNING: The reason checkTodaysData() is important is because 
// calling the APIS multiple times per day without resetting database 
// will store redundant data in the database which will result in undefined behavior
// Therefore NEVER call loadTodaysData directly

const MovieApiHelper  =  require('./helper/movie_helper.js');
const TvApiHelper  = require('./helper/tv_helper.js');
const YoutubeApiHelper = require('./helper/youtube_helper.js');
const {TvTable, MovieTable, YoutubeTable} = require('./models/index.js')

// This will check if the data has already been loaded for the day. If it hasnt, it will
// load the data via the loadData method
function checkTodaysData() {
    let dataAlreadyLoaded = false;
    let tablesChecked = 0;
    TvTable.findOne({
        where : {
            date : new Date()
        }
    })
    .then( (row) => {
        if (row) {
            dataAlreadyLoaded = true;
        }
        tablesChecked += 1;
    }) 
    MovieTable.findOne({
        where : {
            date : new Date()
        }
    })
    .then( (row) => {
        if (row) {
            dataAlreadyLoaded = true; 
        } 
        tablesChecked += 1;
    })

    YoutubeTable.findOne({
        where : {
            date : new Date()
        }
    })
    .then( (row) => {
        if (row) {
           dataAlreadyLoaded = true;
        } 
        tablesChecked += 1;
    })
    // This will decide if we load the data or not after
    // we query our table to see if the daily data is there
    const intervalId = setInterval(() => {
        // Case 1: Data isnt loaded and we checked all tables
        if (!dataAlreadyLoaded && (tablesChecked === 3)) {
            loadTodaysData();
            clearInterval(intervalId);
        }
        else if (dataAlreadyLoaded) {
            clearInterval(intervalId);
        }
    }, 500);
}

// This will load the daily data from all the apis
function loadTodaysData() {
  TvApiHelper.callApiRetrieveData()
    .then( (tvData) => {
        tvData.forEach((tvObj) => {
            TvTable.create(tvObj)
            .then( () => {
                console.log("TV Data Loaded In Successfully From Api");
            })
            .catch( (err) => {
                console.log("Error In Loading In Tv Data From Api");
                console.log(err);
            });
        });
   })


    MovieApiHelper.callApiRetrieveData()
    .then( (movieData) => {
        movieData.forEach((movieObj) => {
            MovieTable.create(movieObj)
            .then( () => {
                console.log("Movie Data Loaded In Successfully From Api");
            })
            .catch( (err) => { 
                console.log("Error In Loading In Movie Data From Api");
                console.log(err);
            });
        });
   })
   
    YoutubeApiHelper.callApiRetrieveData()
    .then( (youtubeData) => {
        youtubeData.forEach((youtubeObj) => {
            YoutubeTable.create(youtubeObj)
            .then( () => { 
                console.log("Youtube Data Loaded In Successfully From APi");
            })
            .catch( (err) => { 
                console.log("Error In Loading In Youtube Data From Api");
                console.log(err);
            });
        });
   })

}

module.exports = checkTodaysData;
