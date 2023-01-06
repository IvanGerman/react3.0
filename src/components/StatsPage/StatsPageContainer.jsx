import { connect } from "react-redux";
import { toggleNavigateModeAC } from "../../redux/statsPageReducer";
import StatsPage from "./StatsPage";



let mapStateToProps = (state) => {

  return {
    navigateMode: state.statsPageData.navigateMode   
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    toggleNavigateMode: (mode) => {
      dispatch(toggleNavigateModeAC(mode));
    }
  }
};

export const StatsPageContainer = connect(mapStateToProps, mapDispatchToProps)(StatsPage);
