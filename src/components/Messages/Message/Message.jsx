import React from "react";
import './Message.css';

const Message = (props) => { 

  const f1 = () => {
    alert('f1');
  }

  return (
    <div className="message" id={props.id} onClick={f1}>
      {props.message}
    </div>
  )
}

export default Message;