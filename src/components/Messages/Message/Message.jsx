import React from "react";
import './Message.css';

const Message = (props) => { 

  async function myDeleteFunc(messageID) {
    
    let result = await fetch(`http://localhost:3001/api/messages/${messageID}`, {
      method: 'DELETE', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjExMUBtYWlsLnJ1IiwidXNlcklkIjoiNjJkYTNjOTg0NjgxMWYwZmM4OTI1ZDVlIiwiaWF0IjoxNjY4Njk0NzM0LCJleHAiOjE2Njg4Njc1MzR9.joEiD8V78hibNJeqadBQZ-7U4_dxyy0MTNThxllV-oM'
      }
    });
    const status = result.status;
    //result = await result.json();
    return status;
  };


  const callback = async function(element) {
    alert('f1');
    console.log(element.target.id);
    let messageID = element.target.id;
    //DELETE request to server
    const status = await myDeleteFunc(messageID);
    if ( status === 200 ) {
      // dispatch call to delete it from store and rerender
      props.deleteMessage(messageID);
    }
  }

  return (
    <div className="message" id={props.id} onClick={callback}>
      {props.message}
    </div>
  )
}

export default Message;