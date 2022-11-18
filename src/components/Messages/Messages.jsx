import React from "react";
import {MessageContainer} from "./Message/MessageContainer";
import './Messages.css';


const Messages = (props) => { console.log('props.state',props.state);

  let allMessages = props.state.messages.map((elem, index) => {
    return ( <MessageContainer id={elem.id} message={elem.message} key={index}></MessageContainer> );
  })
  return (
    <div className="messages">
      {allMessages}
    </div>
  )
}

export default Messages;