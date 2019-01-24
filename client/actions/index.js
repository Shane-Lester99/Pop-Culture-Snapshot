export const CLICKBOX = "CLICKBOX";
export const CLICKNAV = "CLICKNAV";
export const CLOSEMODAL = "CLOSEMODAL"
export const CLICKSUBMIT ="CLICKSUMBIT";
export const GETDATA = "GETDATA";
export const LOGOUT = "LOGOUT";

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

export const logOutFunct = () => {
    return {
        type: LOGOUT
    }
}

//Thunk

export const getDataAsync = () => (dispatch) => {
    let date = new Date(Date.now()-18000000).toISOString().split('T')[0];
    return fetch(`/api/daily/${date}`)
        .then(res => {
            return res.json();
        })
        .then(result => {
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
            dispatch(clickSubmitFunct(username,data));
        })
}

export const signInFunct = (username,password) => dispatch => {
    return fetch(`/api/user/${username}/${password}`)
        .then( (res) => {
            if(res.status !== 404 )
                dispatch(getUserDataFunct(username))
        })
        .catch( () => alert("Wrong Username and Password Combination"))
}

export const putFunct = (accountName, description,userPhoto,mediaObjs) => dispatch => {
    return fetch('/api/user/', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify({
            accountName,
            description,
            userPhoto,
            mediaObjs
        })
    })
    .then( res => {
        if(res.status !== 404)
            dispatch(getUserDataFunct(accountName))
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
    .then( (res) => {
        if(res.status !== 405)
            dispatch(getUserDataFunct(username))
    })
    .catch( () => alert("Username is already in use"))
}

