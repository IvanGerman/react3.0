import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import store from './redux/state.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderAll = (state) => {
  root.render(
    <App state={state} addMessage={store.addMessage.bind(store)}/>
    // <React.StrictMode> causes double rendering in development mode
    // <React.StrictMode>
    //   <App state={state} addMessage={addMessage}/>
    // </React.StrictMode>
  );
};

rerenderAll(store.getState());
store.subscribe(rerenderAll);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


