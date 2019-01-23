
const axios =  require('axios');



//console.log(process.env.MOVIE_DATABASE_API);
//console.log(process.env.YOUTUBE_API_KEY_LOCAL);
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
            //console.log(tvList);
            console.log("NO ERROR");
            return tvList;
        })
        .catch(function (error) {
            console.log(error);
            return undefined;
        });
    }
}

/*const x = new TvApiHelper()

x.callApiRetrieveData()
.then( (data) => {
    console.log(data);
})
*/
module.exports = new TvApiHelper();

