import * as types from "../constants/requestForm";
import initialState from "../initialState/initialState";

export default (state = initialState, action) => {
  if (action.type === types.SET_REQUEST_FORM) {
    return { ...state, ...action.data };
  } else if (action.type === types.SET_SENT_DATA) {
    let sendData = { ...state.sendData, ...action.data };

    return Object.assign({}, state, { sendData: sendData });
  } else if (action.type === types.SET_STEP_DONE) {
    let done = { ...state.done, ...action.data };

    return Object.assign({}, state, { done: done });
  } else {
    return state;
  }
};
