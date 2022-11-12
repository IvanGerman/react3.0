import { v4 as uuidv4 } from 'uuid';

const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = [
  {messages: []}
]

export const gamePageReducer = (state = initialState, action) => {

  console.log('555',state);
  let state2 = {...state};
  //another way to make deep copy(but not sure)
  //let state2 = {...state, messages: [...state[0].messages]};

  switch(action.type) {

    case ADD_MESSAGE:

      let newId = uuidv4();
      let newMessage = {
        id: newId,
        message: action.message
      };

      state2[0].messages = [...state[0].messages];
      
      state2[0].messages.push(newMessage); 
      console.log('_state.gamePageData[0].messages--',state2[0].messages);
      return state2;
    
    default:
      return state2;
  }

};


export const addMessageAC = (message) => {
  return {
    type: ADD_MESSAGE,
    message: message
  }
};