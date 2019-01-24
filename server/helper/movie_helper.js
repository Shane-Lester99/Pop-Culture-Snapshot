// This module will allow for easy access to the api which gives
// trending movie data. To get trending movie data in the form this
// application uses, all that is needed is to import the MovieApiHelper
// object and to call callApiRetrieveData() on it

const axios =  require('axios');

// chooses the environment where the API key secret is kept
let apiKey;
if (process.env.MOVIE_DATABASE_API_KEY_LOCAL) {
    console.log("LOCAL API KEY USED FOR TMDB: Movie");
    apiKey = process.env.MOVIE_DATABASE_API_KEY_LOCAL;
} else if (process.env.TMDB_API_KEY_PRODUCTION) {
    console.log("PRODUCTION API KEY USED FOR TMDB: Movie");
    apiKey = process.env.TMDB_API_KEY_PRODUCTION;
} else {
    console.error("NO API KEY SET ERROR FOR TMDB: Movie.");
    process.exit(1);
}

class MovieApiHelper {
    constructor() {
        // used to construct the api call url
        this.apiParams = {
            base : "https://api.themoviedb.org/3/",
            category : "trending/",
            type: "movie/",
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
            let results = response.data.results;
            const movieList = [];
            for (let i = 0; i < 10; i++) {
                const title = results[i].title;
                const posterPath = results[i].poster_path;
                const overview = results[i].overview;
                const voteScore = results[i].vote_average;
                const releaseDate = results[i].release_date;
                const newMovie = {
                    title,
                    posterPath,
                    overview,
                    voteScore,
                    releaseDate,
                    date: new Date()
                };
                movieList.push(newMovie);
            } 
            return(movieList);
        })
        .catch(function (error) {           
            return undefined;
        });
   }
}

module.exports =  new MovieApiHelper();
