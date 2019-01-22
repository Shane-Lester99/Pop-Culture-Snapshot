const axios =  require('axios');



//console.log(process.env.MOVIE_DATABASE_API);
//console.log(process.env.YOUTUBE_API_KEY_LOCAL);




class MovieApiHelper {
    constructor() {
        
        this.apiParams = {
            base : "https://api.themoviedb.org/3/",
            category : "trending/",
            type: "movie/",
            timeLength: "day?",
            api_key: `api_key=${process.env.MOVIE_DATABASE_API_KEY_LOCAL}`,
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
            //console.log(movieList);
            return(movieList);
        })
        .catch(function (error) {
            //console.log(error);
            return undefined;
        });
   }
}

module.exports =  new MovieApiHelper();

//movieApiCallHelper(apiParams);

//youtubeApiCallHelper(apiParams);

//console.log(youtubeApiCallHelper(apiParams));


