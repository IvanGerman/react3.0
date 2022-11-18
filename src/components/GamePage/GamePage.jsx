import React from "react";
import Messages from "../Messages/Messages";

const GamePage = (props) => { console.log('props---',props);

  // to correct later, to make GamePage a pure component
  const sendDataParent = () => {
    props.sendData(props.textareaRef);
  };

  return (
    <div className="game-page">
      <p>GamePage</p>
      <div>
        <textarea rows="5" cols="40" ref={props.textareaRef}></textarea>
      </div>
      <div>
        <button onClick={sendDataParent}>Send your message</button>
      </div>
      <p>Your messages: (left click to delete / right click to update)</p>
      <div className="sent-messages">
        <Messages state={props.gamePageData}></Messages>
      </div>
    </div>
  )
}

export default GamePage;