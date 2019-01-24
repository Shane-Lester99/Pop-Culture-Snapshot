// This module will allow for easy access to the api which gives
// trending tv data. To get trending tv data in the form this
// application uses, all that is needed is to import the TvApiHelper
// object and to call callApiRetrieveData() on it

const axios =  require('axios');

// This will choose which environment the api secret is held in
let apiKey;
if (process.env.MOVIE_DATABASE_API_KEY_LOCAL) {
    console.log("LOCAL API KEY USED FOR TMDB: Tv");
    apiKey = process.env.MOVIE_DATABASE_API_KEY_LOCAL;
} else if (process.env.TMDB_API_KEY_PRODUCTION) {
    console.log("PRODUCTION API KEY USED FOR TMDB: Tv");
    apiKey = process.env.TMDB_API_KEY_PRODUCTION;
} else {
    console.error("NO API KEY SET ERROR FOR TMDB: Tv.");
    process.exit(1);
}

class TvApiHelper {
    constructor() {
        // api params to construct the api call url
        this.apiParams = {
            base : "https://api.themoviedb.org/3/",
            category : "trending/",
            type: "tv/",
            timeLength: "day?",
            api_key: `api_key=${apiKey}`,
        }
    }
    callApiRetrieveData() {
        let api_call = "";
        // Creates api string from above object
        Object.entries(this.apiParams).forEach( (entry) => {
            api_call += entry[1];
        }); 
        // Call API
        return axios.get(api_call)
        .then(function (response) {
            const results = response.data.results;
            const tvList = [];
            for (let i = 0; i < 10; i++) {
                const title = results[i].original_name;
                const posterPath = results[i].poster_path;
                const overview = results[i].overview;
                const voteScore = results[i].vote_average;
                const releaseDate = results[i].first_air_date;
                const tvObj = {
                    title,
                    posterPath,
                    overview,
                    voteScore,
                    releaseDate,
                    date : new Date()
                };
                tvList.push(tvObj);
            }
            return tvList;
        })
        .catch(function (error) {
            return undefined;
        });
    }
}

module.exports = new TvApiHelper();
