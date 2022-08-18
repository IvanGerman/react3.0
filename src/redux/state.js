import { v4 as uuidv4 } from 'uuid';

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

  addMessage(message) {
    let newId = uuidv4();
    let newMessage = {
      id: newId,
      message: message
    };
    this._state.gamePageData[0].messages.push(newMessage); 
    console.log('_state.gamePageData[0].messages--',this._state.gamePageData[0].messages);
    this._rerenderAll(this._state);
  }
}

export default store;
