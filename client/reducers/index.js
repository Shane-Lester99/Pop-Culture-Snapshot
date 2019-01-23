import  { CLICKBOX, CLICKNAV, CLICKSUBMIT, CLOSEMODAL} from "../actions";

import data from './data';
// data = JSON.parse(data);

console.log("data" , data)

const initialState = {
  display: "daily",
  showModal: false,
  loggedIn: false,
  userId: 0,
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
        state.loggedIn = true
      )
		case CLOSEMODAL:
			return Object.assign(
				{},
				state,
        state.showModal = false,
        state.modalData = '',
        state.modalDisplay = ''
      )
    default:
      return state;
  }
};
