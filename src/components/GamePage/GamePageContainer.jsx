import React from "react";
import { connect } from "react-redux";
import { addMessageAC, updateMessageAC } from "../../redux/gamePageReducer";
import GamePage from "./GamePage";


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
    },
    updateMessage: (id, newMessage) => {
      dispatch(updateMessageAC(id, newMessage));
    }
  }
};

export const GamePageContainer = connect(mapStateToProps, mapDispatchToProps)(GamePage);
