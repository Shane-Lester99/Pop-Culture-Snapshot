const axios =  require('axios');

//https://api.themoviedb.org/3/trending/movie/day?api_key=a40e69006cf3bb7c9fc1ab0717bf208a

//console.log(process.env.MOVIE_DATABASE_API);
//console.log(process.env.YOUTUBE_API_KEY_LOCAL);

const MOVIE_DATABASE_API_KEY_LOCAL="a40e69006cf3bb7c9fc1ab0717bf208a"
const apiParams = {
    base : "https://api.themoviedb.org/3/",
    category : "trending/",
    type: "tv/",
    timeLength: "day?",
    api_key: `api_key=${MOVIE_DATABASE_API_KEY_LOCAL}`,
}

const tvApiCallHelper = (obj) => {
    let api_call = "";
    // Creates api string from above object
    Object.entries(obj).forEach( (entry) => {
        api_call += entry[1];
    });
    console.log(api_call);

   
    // Call API
    axios.get(api_call)
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
                releaseDate
            };
            tvList.push(tvObj);
            console.log(tvList);
        }
        
    })
    .catch(function (error) {
        console.log(error);
    });
}

tvApiCallHelper(apiParams);

//youtubeApiCallHelper(apiParams);

//console.log(youtubeApiCallHelper(apiParams));


