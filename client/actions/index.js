import data from "../reducers/data";

export const CLICKBOX = "CLICKBOX";
export const CLICKNAV = "CLICKNAV";
export const CLOSEMODAL = "CLOSEMODAL"
export const CLICKSUBMIT ="CLICKSUMBIT";
export const GETDATA = "GETDATA";

export const clickBoxFunct = (display, payload) => {
    return {
        type: CLICKBOX,
        display,
        payload,
    }
}

export const clickNavFunct = (display) => {
    return {
        type: CLICKNAV,
        display
    }
}

export const clickSubmitFunct = (userId,userData) => {
    return {
        type: CLICKSUBMIT,
        userId,
        userData,
    }
}

export const closeModalFunct = () => {
  return {
    type: CLOSEMODAL,
  }
}

export const getDataFunct = (payload) => {
    return {
        type: GETDATA,
        payload
    }
}

//Thunk

export const getDataAsync = () => (dispatch) => {
    let date = new Date(Date.now()-14400000).toISOString().split('T')[0];
    console.log(date);
    console.log(new Date());
    return fetch(`/api/daily/${date}`)
        .then(res => {
            return res.json();
        })
        .then(result => {
            console.log(result);
            dispatch(getDataFunct(result));
        })
        .catch(err => {
            console.log(err);
        })
}

export const getUserDataFunct = (username) => dispatch => {
    return fetch(`/api/user/${username}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch(clickSubmitFunct(username,data));
        })
}

export const signInFunct = (username,password) => dispatch => {
    return fetch(`/api/user/${username}/${password}`)
        .then( () => dispatch(getUserDataFunct(username)))
        .catch(err => {
            console.log(err);
        })
}


export const signUpFunct = (username, password) => dispatch => {
    return fetch(`/api/user/`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            accountName: username,
            password,
            description:"",
            userPhoto:""
        })
    })
    .then( () => dispatch(getUserDataFunct(username)))
    .catch(err => console.log(err))
}

