//import { v4 as uuidv4 } from 'uuid';

//const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = [
  {key1 : '111'},
  {key2 : '222'}
]

export const startPageReducer = (state = initialState) => {
  return state;
};


// export const addMessageAC = (message) => {
//   return {
//     type: ADD_MESSAGE,
//     message: message
//   }
// };