import { connect } from "react-redux";
import { deleteMessageAC, updatedMessageIDAC } from "../../../redux/gamePageReducer";
import Message from "./Message";



// let mapStateToProps = (state) => {

//   return {
//     gamePageData: state.gamePageData,
//     textareaRef: React.createRef()
//   }
// };

let mapDispatchToProps = (dispatch) => {
  return {
    deleteMessage: (id) => {
      dispatch(deleteMessageAC(id));
    },
    sendUpdatingMessageID: (id) => {
      dispatch(updatedMessageIDAC(id));
    }
  }
};

export const MessageContainer = connect(null, mapDispatchToProps)(Message);
