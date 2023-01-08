import { connect } from "react-redux";
import { compose } from "redux";
import { myHoc } from "../../hoc/myHoc";
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

// function compose takes component StatsPage, applies myHoc on it, and then applies connect(msp, mdp) on the result

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  myHoc
)(StatsPage);

//const StatsPageWithMyHocUse = myHoc(StatsPage);
//export const StatsPageContainer = connect(mapStateToProps, mapDispatchToProps)(StatsPageWithMyHocUse);
