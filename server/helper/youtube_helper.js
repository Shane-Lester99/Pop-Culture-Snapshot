// This module will allow for easy access to the api which gives
// trending youtube data. To get trending youtube data in the form this
// application uses, all that is needed is to export the YoutubeApiHelper
// object and to call callApiRetrieveData() on it

const axios =  require('axios');

// This will choose the correct environment where the API secret is
let apiKey;
if (process.env.YOUTUBE_API_KEY_LOCAL) {
    console.log("LOCAL API KEY USED FOR Youtube");
    apiKey = process.env.YOUTUBE_API_KEY_LOCAL;
} else if (process.env.YOUTUBE_API_KEY_PRODUCTION) {
    console.log("PRODUCTION API KEY USED FOR Youtube");
    apiKey = process.env.YOUTUBE_API_KEY_PRODUCTION;
} else {
    console.error("NO API KEY SET ERROR FOR Youtube.");
    process.exit(1);
}

class YoutubeApiHelper {
    constructor() {
        //This will be assist in constructing the api call url
        this.apiParams = {
            base : "https://www.googleapis.com/youtube/v3/search?",
            part : "part=snippet",
            maxResults: "maxResults=10",
            order: "order=viewCount",
            api_key: `key=${apiKey}`,
            pushlishedAfter: `publishedAfter=${this.getPrevDate()}`
        }
    }

    // Helper method to get the previous date from today
    getPrevDate() {
        const date = new Date();
        date.setDate(date.getDate() - 1);
        return date.toISOString();
    }

    callApiRetrieveData() {
        let api_call = "";
        // Creates api string from above object
        Object.entries(this.apiParams).forEach( (entry) => {
            api_call += entry[1] + "&";
        });
        api_call = api_call.slice(0,-1);

        // Call API
        return axios.get(api_call)
        .then(function (response) {
            const items = response.data.items;

            var youtubeObjList = [];
            
            items.forEach( (item) => {
                const title = item.snippet.title;
                const channelId = item.snippet.channelId;
                const thumbnail = item.snippet.thumbnails.medium.url;
                const vidId = item.id.videoId;
                const channelTitle = item.snippet.channelTitle;
                const description = item.snippet.description;
                const newYoutubeObj = {
                    title,
                    channelId,
                    thumbnail,
                    vidId,
                    description,
                    channelTitle,
                    date: new Date()
                };
                if (newYoutubeObj.vidId && youtubeObjList.length < 10) {                 
                    youtubeObjList.push(newYoutubeObj);
                }
            });
            return youtubeObjList;
        })
        .catch(function (error) {
            return undefined;
        });
    }
}

module.exports  = new YoutubeApiHelper();
