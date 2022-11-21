import React from "react";
import { connect } from "react-redux";
import { addMessageAC } from "../../redux/gamePageReducer";
import GamePage from "./GamePage";

// const GamePageContainer = (props) => { 

//   let state = props.store.getState().gamePageData;
//   let textareaRef = React.createRef();
//   const sendData = () => {
//     props.store.dispatch(addMessageAC(textareaRef.current.value));
//     textareaRef.current.value = '';
//   }

//   return (
//     <GamePage sendData={sendData} state ={state} textareaRef={textareaRef} />
//   )
// }


let mapStateToProps = (state) => {

  return {
    gamePageData: state.gamePageData,
    updatedMessageID: state.gamePageData.updatedMessageID,
    textareaRef: React.createRef(),
    textareaRef2: React.createRef()
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendData: (textareaRef) => {
      dispatch(addMessageAC(textareaRef.current.value));
      textareaRef.current.value = '';
    }
  }
};

export const GamePageContainer = connect(mapStateToProps, mapDispatchToProps)(GamePage);


//export default GamePageContainer;