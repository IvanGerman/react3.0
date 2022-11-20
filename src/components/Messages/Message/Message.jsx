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
    alert('f1');
    console.log(element.target.id);
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

  const myFunction = async function(element) {
    console.log('element--',element);
    console.log(element.id);
    let messageID = element.id;
    console.log('messageID---',messageID);

  }

  return (
    <div className="message" id={props.id} onClick={deleteMessage} onContextMenu={
      (event) => {event.preventDefault();myFunction(event.target)} }>
      {props.message}
    </div>
  )
}

export default Message;