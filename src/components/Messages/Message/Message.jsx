import React from "react";
import { deleteMessageRequest } from "../../../API/api";
import { deleteMessageThunkCreator } from "../../../redux/messageReducer";

import styles from './Message.module.css';


const Message = (props) => { 

  const deleteMessage = async function(element) {

    let messageID = element.target.id;
    //DELETE request to server
    const status = await deleteMessageThunkCreator(messageID);
    //const status = await deleteMessageRequest(messageID);
    if ( status === 200 ) {
      // dispatch call to delete it from store and rerender
      props.deleteMessage(messageID);
    } else {
      console.log('could not delete the message');
    }
  };

  const sendUpdatingMessageID = async function(element) {
    
    let messageID = element.id;
    console.log('messageID--',messageID);
    // open form for pasting in new/updated message
    const updateMenu = document.querySelector('.updateMenuMain');
    updateMenu.style.display = 'block';
    props.sendUpdatingMessageID(messageID);
  }

  return (
    <div className={styles.message} id={props.id} onClick={deleteMessage} onContextMenu={
      (event) => {event.preventDefault();sendUpdatingMessageID(event.target)} }>
      {props.message}
    </div>
  )
}

export default Message;