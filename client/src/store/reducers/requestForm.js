import * as types from "../constants/requestForm";
import initialState from "../initialState/initialState";

export default (state = initialState, action) => {
  if (action.type === types.SET_REQUEST_FORM) {
    return { ...state, ...action.data };
  } else {
    return state;
  }
};
