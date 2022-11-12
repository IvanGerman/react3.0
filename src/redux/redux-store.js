// createStore is deprecated now
import { combineReducers,  legacy_createStore as createStore } from "redux";
import { gamePageReducer } from "./gamePageReducer";
import { startPageReducer } from "./startPageReducer";

let reducers = combineReducers({
  startPageData: startPageReducer,
  gamePageData: gamePageReducer,
});
let store = createStore(reducers); 

export default store;
