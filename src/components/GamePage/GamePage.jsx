import React from "react";
import Messages from "../Messages/Messages";

const GamePage = (props) => { console.log('props.state gamePageData',props.state);

  let textareaRef = React.createRef();
  const sendData = () => {
    props.addMessage(textareaRef.current.value);
    textareaRef.current.value = '';
  }

  return (
    <div className="game-page">
      <p>GamePage</p>
      <div>
        <textarea rows="5" cols="40" ref={textareaRef}></textarea>
      </div>
      <div>
        <button onClick={sendData}>Send your message</button>
      </div>
      <p>Your messages:</p>
      <div className="sent-messages">
        <Messages state={props.state}></Messages>
      </div>
    </div>
  )
}

export default GamePage;