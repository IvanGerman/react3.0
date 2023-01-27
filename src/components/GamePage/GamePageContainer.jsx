import React from "react";
import { connect } from "react-redux";
import { addMessageAC, updateMessageAC } from "../../redux/gamePageReducer";
import { getGamePageData } from "../../redux/Selectors/gamePage-selectors";
import GamePage from "./GamePage";

const GamePageContainer = (props) => {
  return (
    <GamePage gamePageData = {props.gamePageData}
              updatedMessageID = {props.updatedMessageID}
              textareaRef = {props.textareaRef}
              textareaRef2 = {props.textareaRef2}
              sendData = {props.sendData}
              updateMessage = {props.updateMessage}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    gamePageData: getGamePageData(state),
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

export default connect(mapStateToProps, mapDispatchToProps)(GamePageContainer);

