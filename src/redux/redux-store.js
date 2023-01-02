// createStore is deprecated now
import { combineReducers,  legacy_createStore as createStore } from "redux";
import { gamePageReducer } from "./gamePageReducer";
import { messageReducer } from "./messageReducer";
import { startPageReducer } from "./startPageReducer";

let reducers = combineReducers({
  startPageData: startPageReducer,
  gamePageData: gamePageReducer,
  messagePageData: messageReducer
});
let store = createStore(reducers); 

export default store;
