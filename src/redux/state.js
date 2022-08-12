import { v4 as uuidv4 } from 'uuid';

let state = {
  startPageData: [
    {key1 : '111'},
    {key2 : '222'}
  ],
  gamePageData: [
    {messages: []}
  ],
  statsPageData: [],
};

export const addMessage = (message) => {
  let newId = uuidv4();
  let newMessage = {
    id: newId,
    message: message
  };
  state.gamePageData[0].messages.push(newMessage);
  console.log('state.gamePageData[0].messages--',state.gamePageData[0].messages);
}

export default state;