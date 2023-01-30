import React, { useEffect } from "react";
import { useState } from "react";

import styles from './UseHooksPage.module.css';


const UseHooksPage = (props) => { 

  // hooks are not to use inside of conditionals and cycles
  
  //useState--------------------------------------------

  //this 3 lines are explaining the line below
  //let localState = useState(true);
  //let editMode = localState[0];
  //let setEditMode = localState[1];
  let [editMode, setEditMode] = useState(false);
  let [value1, setValue1] = useState(1);

  const activateEditMode = () => {
    setEditMode(true);
    console.log('editModeAct---',editMode);
    setValue1(value1+=1);
    console.log('value1---',value1);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    console.log('editModeDeact---',editMode);
  };


  //useEffect--------------------------------------------
  //starts his callback function after the rendering of the component

  useEffect(() => { console.log('useEffect');
    if (editMode) alert(editMode);
  }, [editMode]);//[editMode] - in this array we set dependencies, when hooks callback function will be launched

  return (
    <div className={styles.useHooksPage}>
      
      <p>UseHooksPage</p>
      <span onDoubleClick = { activateEditMode } >status</span>
      <input type="text" autoFocus={true} onBlur = { deactivateEditMode } />
      <p> { value1 } </p>
      
    </div>
  )
}

export default UseHooksPage;
