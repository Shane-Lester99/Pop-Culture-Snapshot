const axios =  require('axios');

//https://api.themoviedb.org/3/trending/movie/day?api_key=a40e69006cf3bb7c9fc1ab0717bf208a

//console.log(process.env.MOVIE_DATABASE_API);
//console.log(process.env.YOUTUBE_API_KEY_LOCAL);

//http://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg

const MOVIE_DATABASE_API_KEY_LOCAL="a40e69006cf3bb7c9fc1ab0717bf208a"
const apiParams = {
    base : "https://api.themoviedb.org/3/",
    category : "trending/",
    type: "movie/",
    timeLength: "day?",
    api_key: `api_key=${MOVIE_DATABASE_API_KEY_LOCAL}`,
}

const movieApiCallHelper = (obj) => {
    let api_call = "";
    // Creates api string from above object
    Object.entries(obj).forEach( (entry) => {
        api_call += entry[1];
    });
   
    // Call API
    axios.get(api_call)
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
            };
            movieList.push(newMovie);
        }
        console.log(movieList);

        /*
        items = response.data.items;
        
        var youtubeObjList = [];

        items.forEach( (item) => {
            const title = item.snippet.title;
            const channelId = item.snippet.channelId;
            const thumbnail = item.snippet.thumbnails.default.url;
            const vidId = item.id.videoId;
            const channelTitle = item.snippet.channelTitle;
            const newYoutubeObj = {
                title,
                channelId,
                thumbnail,
                vidId,
                channelTitle
            };
            console.log(newYoutubeObj);
            youtubeObjList.push(newYoutubeObj);
        });
        console.log(youtubeObjList);
        return youtubeObjList;*/
    })
    .catch(function (error) {
        console.log(error);
    });
}

movieApiCallHelper(apiParams);

//youtubeApiCallHelper(apiParams);

//console.log(youtubeApiCallHelper(apiParams));


