// createStore is deprecated now
import { applyMiddleware, combineReducers,  legacy_createStore as createStore } from "redux";
import { gamePageReducer } from "./gamePageReducer";
import { messageReducer } from "./messageReducer";
import { startPageReducer } from "./startPageReducer";
import thunkMiddleware from 'redux-thunk';
import { statsPageReducer } from "./statsPageReducer";

let reducers = combineReducers({
  startPageData: startPageReducer,
  gamePageData: gamePageReducer,
  messagePageData: messageReducer,
  statsPageData: statsPageReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 

export default store;
