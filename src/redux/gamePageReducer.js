import { v4 as uuidv4 } from 'uuid';

const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
  messages: []
};


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

      state2.messages = [...state.messages];
      
      state2.messages.push(newMessage); 
      console.log('_state.gamePageData.messages--',state2.messages);

      async function myPostFunc() {
        await fetch('http://localhost:3001/api/messages', {
          method: 'POST', 
          mode: 'cors', 
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjExMUBtYWlsLnJ1IiwidXNlcklkIjoiNjJkYTNjOTg0NjgxMWYwZmM4OTI1ZDVlIiwiaWF0IjoxNjY4MjY1  NTY3LCJleHAiOjE2Njg0MzgzNjd9.yIqQLQseKavKT1V1w1ksXOq2G-YpDvQgPa2ndM3l3Gc"
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