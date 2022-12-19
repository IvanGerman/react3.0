import React from "react";

import styles from './Message.module.css';


const Message = (props) => { 

  async function myDeleteFunc(messageID) {
    
    let result = await fetch(`http://localhost:3001/api/messages/${messageID}`, {
      method: 'DELETE', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR0NTVAbWFpbC5ydSIsInVzZXJJZCI6IjYzN2UyMzBhZmFiMjBjYTMyZTI4Njc3MyIsImlhdCI6MTY2OTIxOTcyMywiZXhwIjoxNjcxODExNzIzfQ.OHeNlK3ensx-xRvFmP_lXuu3XoD4y3qpKmmV28wtKPE'
      }
    });
    const status = result.status;
    //result = await result.json();
    return status;
  };


  const deleteMessage = async function(element) {

    let messageID = element.target.id;
    //DELETE request to server
    const status = await myDeleteFunc(messageID);
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