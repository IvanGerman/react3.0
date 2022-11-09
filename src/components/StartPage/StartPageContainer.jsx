import { connect } from "react-redux";
import StartPage from "./StartPage";


let mapStateToProps = (state) => {
  return {
    startPageData: state.startPageData,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
  
  }
};

export const StartPageContainer = connect(mapStateToProps, mapDispatchToProps)(StartPage);


