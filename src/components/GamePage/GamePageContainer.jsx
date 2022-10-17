import React from "react";
import { addMessageAC } from "../../redux/gamePageReducer";
import GamePage from "./GamePage";

const GamePageContainer = (props) => { 

  let textareaRef = React.createRef();
  const sendData = () => {
    props.dispatch(addMessageAC(textareaRef.current.value));
    textareaRef.current.value = '';
  }

  return (
    <GamePage sendData = { sendData } state = { props.state} textareaRef = { textareaRef } />
  )
}

export default GamePageContainer;