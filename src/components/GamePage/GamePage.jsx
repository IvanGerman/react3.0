import React from "react";
import Messages from "../Messages/Messages";
import './GamePage.css';


const GamePage = (props) => { console.log('props---',props);

  const updateMenu = document.querySelector('.updateMenu');
  // to correct later, to make GamePage a pure component
  const createMessage = () => {
    props.sendData(props.textareaRef);
  };

  const updateMessageCallback = () => {
  
    let messageID = props.updatedMessageID;
    let newMessage = props.textareaRef2.current.value;

    async function myUpdateFunc(id, newMessage) {

      let result = await fetch(`http://localhost:3001/api/messages/${id}`, {
        method: 'PUT', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjExMUBtYWlsLnJ1IiwidXNlcklkIjoiNjJkYTNjOTg0NjgxMWYwZmM4OTI1ZDVlIiwiaWF0IjoxNjY4OTQ2ODI1LCJleHAiOjE2NzE1Mzg4MjV9.72t-UXiP0_pD5vNwS3QBRKWBaqWw4WeS_2PCOrqBIgU'
        },
        body: JSON.stringify(
          {'message': newMessage})
      })

      const status = result.status; 

      if ( status === 200 ) {
      // here we call dispatch function to change state with new/updated message to rerender  
      props.updateMessage(messageID, newMessage); 
      // close form for pasting in new/updated message
      updateMenu.style.display = 'none';

      } else {
          console.log('could not update the message');
          // close form for pasting in new/updated message
          updateMenu.style.display = 'none';
      };
      
    };
    myUpdateFunc(messageID, newMessage);

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
          <button onClick={updateMessageCallback} className="updateBtn">Update your message</button>
        </div>
      </div>
    </div>
  )
}

export default GamePage;
