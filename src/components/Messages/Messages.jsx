import React from "react";
import Message from "./Message/Message";

const Messages = (props) => { console.log('props.state',props.state);

  let allMessages = props.state.messages.map((elem, index) => {
    return ( <Message message={elem.message} key={index}></Message> );
  })
  return (
    <div className="messages">
      {allMessages}
    </div>
  )
}

export default Messages;