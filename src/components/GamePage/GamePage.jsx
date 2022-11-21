import React from "react";
import Messages from "../Messages/Messages";
import './GamePage.css';


const GamePage = (props) => { console.log('props---',props);

  // to correct later, to make GamePage a pure component
  const createMessage = () => {
    props.sendData(props.textareaRef);
  };

  const updateMessage = () => {
    console.log('props.textareaRef2.current.value---',props.textareaRef2.current.value);
    console.log('props.updatedMessageID---', props.updatedMessageID);

    async function myUpdateFunc(id, newMessage) {

      await fetch(`http://localhost:3001/api/messages/${id}`, {
        method: 'PUT', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjExMUBtYWlsLnJ1IiwidXNlcklkIjoiNjJkYTNjOTg0NjgxMWYwZmM4OTI1ZDVlIiwiaWF0IjoxNjY4OTQ2ODI1LCJleHAiOjE2NzE1Mzg4MjV9.72t-UXiP0_pD5vNwS3QBRKWBaqWw4WeS_2PCOrqBIgU'
        },
        body: JSON.stringify(
          {'message': newMessage})
      })
      .then((response) => { 
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
    };
    myUpdateFunc(props.updatedMessageID, props.textareaRef2.current.value)


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

      <div className="updateMenu" >
        <div>
          <textarea rows="5" cols="40" className="updateTxtArea" ref={props.textareaRef2}></textarea>
        </div>
        <div>
          <button onClick={updateMessage} className="updateBtn">Update your message</button>
        </div>
      </div>
    </div>
  )
}

export default GamePage;