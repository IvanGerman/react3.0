import { v4 as uuidv4 } from 'uuid';
import { postNewMessageToMongo } from '../API/api';

const ADD_MESSAGE = 'ADD_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const UPDATED_MESSAGE_ID = 'UPDATED_MESSAGE_ID';


let initialState = {
  messages: [],
  updatedMessageID: ''
};


export const gamePageReducer = (state = initialState, action) => {

  console.log('555',state);
  let stateCopy = {...state};
  stateCopy.messages = [...state.messages];
  //another way to make deep copy(but not sure)
  //let stateCopy = {...state, messages: [...state[0].messages]};

  switch(action.type) {

    case ADD_MESSAGE:

      let newId = uuidv4();
      let newMessage = {
        id: newId,
        message: action.message
      };

      //stateCopy.messages = [...state.messages];
      
      stateCopy.messages.push(newMessage); 
      console.log('_state.gamePageData.messages--',stateCopy.messages);

      // async function myPostFunc() {
      //   await fetch('http://localhost:3001/api/messages', {
      //     method: 'POST', 
      //     mode: 'cors', 
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': process.env.REACT_APP_JWT_TOKEN
      //     },
      //     body: JSON.stringify(newMessage) 
      //   })
      //   .then((response) => { 
      //     return response.json();
      //   })
      //   .then((data) => {
      //     console.log(data);
      //   });
      // };

      postNewMessageToMongo(newMessage);

      return stateCopy;
    

    case 'DELETE_MESSAGE': 

      for ( let i = 0; i < stateCopy.messages.length; i += 1) {
        if ( stateCopy.messages[i].id === action.id ) {
          stateCopy.messages.splice(i, 1);
          break;
        }
      }
      return stateCopy;


    case 'PROVIDE_DATA':
      
      action.data.forEach(element => {
        stateCopy.messages.push({
          'id': element.id,
          'message': element.message
        });
      });
      return stateCopy;

    case 'UPDATE_MESSAGE':
  
      for ( let i = 0; i < stateCopy.messages.length; i += 1) {    
        if ( stateCopy.messages[i].id === action.id ) {
          stateCopy.messages[i].message = action.newMessage;
          break;
        }
      }
      return stateCopy;

    case 'UPDATED_MESSAGE_ID':
      
      stateCopy.updatedMessageID = action.id;
      console.log('stateCopy--',stateCopy);
      return stateCopy;

    default:
      return stateCopy;
  }

};


export const addMessageAC = (message) => {
  return {
    type: ADD_MESSAGE,
    message: message
  }
};

export const deleteMessageAC = (id) => {
  return {
    type: DELETE_MESSAGE,
    id: id
  }
};

export const updateMessageAC = (id, newMessage) => {
  return {
    type: UPDATE_MESSAGE,
    id: id,
    newMessage: newMessage
  }
};

export const updatedMessageIDAC = (id) => {
  return {
    type: UPDATED_MESSAGE_ID,
    id: id
  }
};