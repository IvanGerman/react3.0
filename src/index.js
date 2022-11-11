import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import store from './redux/redux-store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

//const rerenderAll = () => { 
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
        {/* <App state={state} dispatch={store.dispatch.bind(store)} store={store} /> */}
      </Provider>
    </BrowserRouter>
    // <React.StrictMode> causes double rendering in development mode
    // <React.StrictMode>
    //   <App state={state} addMessage={addMessage}/>
    // </React.StrictMode>
  );
//};


//rerenderAll();
// store.subscribe(() => {
//   rerenderAll();
// });


//former rerenderAll block
// rerenderAll(store.getState());
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderAll(state);
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


