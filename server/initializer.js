const MovieApiHelper  =  require('./helper/movie_helper.js');
const TvApiHelper  = require('./helper/tv_helper.js');
const YoutubeApiHelper = require('./helper/youtube_helper.js');
const {TvTable, MovieTable, YoutubeTable} = require('./models/index.js')

function loadTodaysData() {
  TvApiHelper.callApiRetrieveData()
    .then( (tvData) => {
        tvData.forEach((tvObj) => {
            TvTable.create(tvObj)
            .then( () => {
                console.log("SUCCESS");
            })
            .catch( (err) => {
                console.log("ERROR");
                console.log(err);
            });
        });
   })


    MovieApiHelper.callApiRetrieveData()
    .then( (movieData) => {
        movieData.forEach((movieObj) => {
            MovieTable.create(movieObj)
            .then( () => {
                console.log("SUCCESS");
            })
            .catch( (err) => {
                console.log("ERROR");
                console.log(err);
            });
        });
   })
/*    YoutubeApiHelper.callApiRetrieveData()
    .then( (youtubeData) => {
        youtubeData.forEach((youtubeObj) => {
            YoutubeTable.create(youtubeObj)
            .then( () => {
                console.log("SUCCESS");
            })
            .catch( (err) => {
                console.log("ERROR");
                console.log(err);
            });
        });
   })
*/
}

module.exports = loadTodaysData;
