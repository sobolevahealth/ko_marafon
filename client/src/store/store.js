import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import exampleInitialState from "./initialState/initialState";
import reducer from "./reducers";

export default function initializeStore(initialState = exampleInitialState) {
  let persistedState = {};
  //Uncomment in case of using persisted state
  return createStore(
    reducer,
    { ...initialState, ...persistedState },
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
