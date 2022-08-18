import { v4 as uuidv4 } from 'uuid';

const ADD_MESSAGE = 'ADD_MESSAGE';

let store = {

  _state: {
    startPageData: [
      {key1 : '111'},
      {key2 : '222'}
    ],
    gamePageData: [
      {messages: []}
    ],
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
    
    if (action.type === 'ADD_MESSAGE') {
      let newId = uuidv4();
      let newMessage = {
        id: newId,
        message: action.message
      };
      this._state.gamePageData[0].messages.push(newMessage); 
      console.log('_state.gamePageData[0].messages--',this._state.gamePageData[0].messages);
      this._rerenderAll(this._state);
    } else {
      console.log('other dispatch type called');
    }
  }
}

export default store;


export const addMessageAC = (message) => {
  return {
    type: ADD_MESSAGE,
    message: message
  }
};
