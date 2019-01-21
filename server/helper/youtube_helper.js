const axios =  require('axios');

class YoutubeApiHelper {
    constructor() {
        this.YOUTUBE_API_KEY_LOCAL="AIzaSyCogSg0nmihx-MTux2wr_NUSnbJpQdE69";
        this.apiParams = {
            base : "https://www.googleapis.com/youtube/v3/search?",
            part : "part=snippet",
            maxResults: "maxResults=10",
            api_key: `key=${this.YOUTUBE_API_KEY_LOCAL}`,
            pushlishedAfter: `publishedAfter=${this.getPrevDate()}`
        }
    }

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
        axios.get(api_call)
        .then(function (response) {
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
            //console.log(youtubeObjList);
            return youtubeObjList;
        })
        .catch(function (error) {
            //console.log(error);
            return undefined;
        });
    }
}

//Generate API strings:


module.exports  = new YoutubeApiHelper();
//console.log(x.callApiRetrieveData());

//console.log(youtubeApiCallHelper(apiParams));


