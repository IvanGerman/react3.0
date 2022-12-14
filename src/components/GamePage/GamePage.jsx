import React from "react";
import { updateMessage } from "../../API/api";

import Messages from "../Messages/Messages";
import styles from './GamePage.module.css';


const GamePage = (props) => { 

// this is how to select html element by class using css-modules: 
// document.querySelector(`.${styles.updateMenu}`)
  const updateMenu = document.querySelector(`.${styles.updateMenu}`);
  // to correct later, to make GamePage a pure component
  const createMessage = () => {
    props.sendData(props.textareaRef);
  };

  const updateMessageCallback = () => {
  
    let messageID = props.updatedMessageID;
    let newMessage = props.textareaRef2.current.value;

    updateMessage(messageID, newMessage)
        .then((result) => {
          const status = result.status; 
         
          if ( status === 200 ) {
          // here we call dispatch function to change state with new/updated message to rerender  
          props.updateMessage(messageID, newMessage); 
          // close form for pasting in new/updated message
          updateMenu.style.display = 'none';
          props.textareaRef2.current.value = '';

          } else {
              console.log('could not update the message');
              // close form for pasting in new/updated message
              updateMenu.style.display = 'none';
              props.textareaRef2.current.value = '';
            };
          }
        )
  };

  return (
    <div className="game-page">
      <p>GamePage</p>
      <div>
        <textarea rows="5" cols="40" ref={props.textareaRef}></textarea>
      </div>
      <div>
        <button onClick={createMessage}>Send your message</button>
      </div>
      <p>Your messages: (left click to delete / right click to update)</p>
      <div className="sent-messages">
        <Messages state={props.gamePageData}></Messages>
      </div>

      <div className={`${styles.updateMenu} updateMenuMain`} >
        <div>
          <textarea rows="5" cols="40" className="updateTxtArea" ref={props.textareaRef2}></textarea>
        </div>
        <div>
          <button onClick={updateMessageCallback} className={styles.updateBtn}>Update your message</button>
        </div>
      </div>
    </div>
  )
}

export default GamePage;
