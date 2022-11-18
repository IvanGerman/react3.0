import { v4 as uuidv4 } from 'uuid';

const ADD_MESSAGE = 'ADD_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';


let initialState = {
  messages: []
};


export const gamePageReducer = (state = initialState, action) => {

  console.log('555',state);
  let state2 = {...state};
  state2.messages = [...state.messages];
  //another way to make deep copy(but not sure)
  //let state2 = {...state, messages: [...state[0].messages]};

  switch(action.type) {

    case ADD_MESSAGE:

      let newId = uuidv4();
      let newMessage = {
        id: newId,
        message: action.message
      };

      //state2.messages = [...state.messages];
      
      state2.messages.push(newMessage); 
      console.log('_state.gamePageData.messages--',state2.messages);

      async function myPostFunc() {
        await fetch('http://localhost:3001/api/messages', {
          method: 'POST', 
          mode: 'cors', 
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjExMUBtYWlsLnJ1IiwidXNlcklkIjoiNjJkYTNjOTg0NjgxMWYwZmM4OTI1ZDVlIiwiaWF0IjoxNjY4Njk0NzM0LCJleHAiOjE2Njg4Njc1MzR9.joEiD8V78hibNJeqadBQZ-7U4_dxyy0MTNThxllV-oM'
          },
          body: JSON.stringify(newMessage) 
        })
        .then((response) => { 
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
      };

      myPostFunc();

      return state2;
    

    case 'DELETE_MESSAGE': 

      for ( let i = 0; i < state2.messages.length; i += 1) {
        if ( state2.messages[i].id === action.id ) {
          state2.messages.splice(i, 1);
          break;
        }
      }
      return state2;


    case 'PROVIDE_DATA':
      
      action.data.forEach(element => {
        state2.messages.push({
          'id': element.id,
          'message': element.message
        });
      });
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

export const deleteMessageAC = (id) => {
  return {
    type: DELETE_MESSAGE,
    id: id
  }
};