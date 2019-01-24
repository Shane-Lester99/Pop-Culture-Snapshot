import  { CLICKBOX, CLICKNAV, CLICKSUBMIT, CLOSEMODAL, GETDATA, LOGOUT} from "../actions";

import data from './data';

const initialState = {
  display: "daily",
  showModal: false,
  loggedIn: false,
  userId: '',
  data,
  userData: {},
  modalData: {},
  modalDiplay: '',
};


export default (state = initialState, action) => {
  switch (action.type) {
    case CLICKBOX:
      return Object.assign(
        {},
        state,
        state.showModal = true,
        state.modalData = action.payload,
        state.modalDisplay = action.display
      )
    case CLICKNAV:
      return Object.assign(
        {},
        state,
        state.display = action.display
      )
    case CLICKSUBMIT:
      return Object.assign(
        {},
        state,
        state.userId = action.userId,
        state.userData = action.userData,
        state.loggedIn = true,
        state.display = 'page'
      )
		case CLOSEMODAL:
			return Object.assign(
				{},
				state,
        state.showModal = false,
        state.modalData = '',
        state.modalDisplay = ''
      )
    case GETDATA:
      return Object.assign(
        {},
        state,
        state.data = action.payload
      )
    case LOGOUT:
      return Object.assign(
        {},
        state,
        state.userData = {},
        state.loggedIn = false,
        state.userId = '',
        state.display = 'daily'
      )
    default:
      return state;
  }
};
