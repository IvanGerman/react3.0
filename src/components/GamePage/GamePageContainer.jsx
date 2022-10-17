import React from "react";
import { addMessageAC } from "../../redux/gamePageReducer";
import GamePage from "./GamePage";

const GamePageContainer = (props) => { 

  let state = props.store.getState().gamePageData;
  let textareaRef = React.createRef();
  const sendData = () => {
    props.store.dispatch(addMessageAC(textareaRef.current.value));
    textareaRef.current.value = '';
  }

  return (
    <GamePage sendData={sendData} state ={state} textareaRef={textareaRef} />
  )
}

export default GamePageContainer;