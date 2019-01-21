const base = "https://www.googleapis.com/youtube/v3/search"

function getPrevDate() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date.toISOString();
}

const call_obj = {
    base : "https://www.googleapis.com/youtube/v3/search?",
    part : "part=snippet",
    maxResults: "maxResults=10",
    api_key: "key=AIzaSyCogSg0nmihx-MTux2wr_NUSnbJpQdE69U",
    pushlishedAfter: `publishedAfter=${getPrevDate()}`
}

const call_youtube_api = (obj) => {
    let api_call = "";
    Object.entries(obj).forEach( (entry) => {
        api_call += entry[1] + "&";
    });
    api_call = api_call.slice(0,-1);
    return api_call;
}

//console.log(call_youtube_api(call_obj));
