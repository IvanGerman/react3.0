import React from "react";
import './Message.css';

const Message = (props) => { 

  async function myDeleteFunc(messageID) {
    

    await fetch(`http://localhost:3001/api/messages/${messageID}`, {
      method: 'DELETE', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjExMUBtYWlsLnJ1IiwidXNlcklkIjoiNjJkYTNjOTg0NjgxMWYwZmM4OTI1ZDVlIiwiaWF0IjoxNjY4NTE4ODM2LCJleHAiOjE2Njg2OTE2MzZ9.9g4k1nbv_VZdb1y5xJH3jFRTH1tCMi3mj254qy5Vw4A'
      }
    })
    .then((response) => { 
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  };


  const f1 = function(element) {
    alert('f1');
    console.log(element.target.id);
    let messageID = element.target.id;
    //DELETE request to server
    myDeleteFunc(messageID);
    // dispatch call to delete it from store and rerender
    
  }

  return (
    <div className="message" id={props.id} onClick={f1}>
      {props.message}
    </div>
  )
}

export default Message;