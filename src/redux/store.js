// redux store looks like this:   (its not using in this application)
import { gamePageReducer } from "./gamePageReducer";


let store = {

  _state: {
    startPageData: [
      {key1 : '111'},
      {key2 : '222'}
    ],
    gamePageData: {
      messages: []
    },
    statsPageData: [],
  },

  getState() {
    return this._state;
  },

  _rerenderAll() {

  },

  subscribe(observer) {
    this._rerenderAll = observer;
  },

  dispatch(action) {
    
    this._state.gamePageData = gamePageReducer(this._state.gamePageData, action);
    
    this._rerenderAll(this._state);
  }
}

export default store;



