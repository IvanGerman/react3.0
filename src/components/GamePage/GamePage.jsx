import React from "react";

const GamePage = (props) => {

  let textareaRef = React.createRef();
  const sendData = () => {
    props.addMessage(textareaRef.current.value);
    alert(textareaRef.current.value);
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
    </div>
  )
}

export default GamePage;