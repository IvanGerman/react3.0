import React from "react";
import './Message.css';

const Message = (props) => { 

  async function myDeleteFunc(messageID) {
    
    let result = await fetch(`http://localhost:3001/api/messages/${messageID}`, {
      method: 'DELETE', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjExMUBtYWlsLnJ1IiwidXNlcklkIjoiNjJkYTNjOTg0NjgxMWYwZmM4OTI1ZDVlIiwiaWF0IjoxNjY4OTQ2ODI1LCJleHAiOjE2NzE1Mzg4MjV9.72t-UXiP0_pD5vNwS3QBRKWBaqWw4WeS_2PCOrqBIgU'
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
    const updateMenu = document.querySelector('.updateMenu');
    updateMenu.style.display = 'block';
    props.sendUpdatingMessageID(messageID);
    //UPDATE request to server, need updated message and id of old message
    //const status = await myUpdateFunc(messageID);
    //if ( status === 200 ) {
      // dispatch call to update the message in store and rerender
    //  props.updateMessage(messageID, updatedMessage);
    //} else {
    //  console.log('could not update the message');
    //}

  }

  return (
    <div className="message" id={props.id} onClick={deleteMessage} onContextMenu={
      (event) => {event.preventDefault();sendUpdatingMessageID(event.target)} }>
      {props.message}
    </div>
  )
}

export default Message;