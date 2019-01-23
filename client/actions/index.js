export const CLICKBOX = "CLICKBOX";
export const CLICKNAV = "CLICKNAV";
export const CLOSEMODAL = "CLOSEMODAL"
export const CLICKSUBMIT ="CLICKSUMBIT";


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
