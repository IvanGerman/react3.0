const TOGGLE_NAVIGATE_MODE = 'TOGGLE_NAVIGATE_MODE';



let initialState = {
  navigateMode: false 
};


export const statsPageReducer = (state = initialState, action) => {

  let stateCopy = {...state};
  
  switch(action.type) {

    case TOGGLE_NAVIGATE_MODE:    console.log('TOGGLE_NAVIGATE_MODE');

      stateCopy.navigateMode = action.mode;
      return stateCopy;

    default:
      return stateCopy;
  }

};


//ActionCreators----------------------------------------------------------------------------------------

export const toggleNavigateModeAC = (mode) => {
  return {
    type: TOGGLE_NAVIGATE_MODE,
    mode: mode
  }
};


//ThunkCreators----------------------------------------------------------------------------------------
