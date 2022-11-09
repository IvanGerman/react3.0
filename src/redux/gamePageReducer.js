import { v4 as uuidv4 } from 'uuid';

const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = [
  {messages: []}
]

export const gamePageReducer = (state = initialState, action) => {

  switch(action.type) {

    case ADD_MESSAGE:
      let newId = uuidv4();
      let newMessage = {
        id: newId,
        message: action.message
      };
      state[0].messages.push(newMessage); 
      console.log('_state.gamePageData[0].messages--',state[0].messages);
      return state;
    
    default:
      return state;
  }

};


export const addMessageAC = (message) => {
  return {
    type: ADD_MESSAGE,
    message: message
  }
};