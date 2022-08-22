import { combineReducers, createStore } from "redux";
import { gamePageReducer } from "./gamePageReducer";

let reducers = combineReducers({
  gamePageData: gamePageReducer,
});
let store = createStore(reducers);

export default store;
