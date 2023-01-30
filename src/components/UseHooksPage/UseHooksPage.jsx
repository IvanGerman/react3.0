import React from "react";
import { useState } from "react";

import styles from './UseHooksPage.module.css';


const UseHooksPage = (props) => { 

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
  }

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
