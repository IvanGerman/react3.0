import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import store from './redux/redux-store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

//just to watch state from store
let state = store.getState();
console.log('state---------',state);

//const rerenderAll = () => { 

  // GET request for all messages from mongoDB
  async function myGetFunc() { 

    await fetch('http://localhost:3001/api/messages', { 
      method: 'GET', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjExMUBtYWlsLnJ1IiwidXNlcklkIjoiNjJkYTNjOTg0NjgxMWYwZmM4OTI1ZDVlIiwiaWF0IjoxNjY4Njk0NzM0LCJleHAiOjE2Njg4Njc1MzR9.joEiD8V78hibNJeqadBQZ-7U4_dxyy0MTNThxllV-oM'
      }
    })
    .then( async (response) => { 
      const response2 = await response.json();
      return response2;
    })
    .then((data) => {
      //provide gamePage with messages from mongoDB
      store.dispatch({
        type: 'PROVIDE_DATA',
        data: data
      })

      root.render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );
    })
    .catch(err => {
      console.log(err);
      //later to remove
      root.render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );
    })
  };

  myGetFunc();

  // root.render(
  //   <BrowserRouter>
  //     <Provider store={store}>
  //       <App />
  //       <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
  //     </Provider>
  //   </BrowserRouter>
  //   <React.StrictMode> causes double rendering in development mode
  //   <React.StrictMode>
  //     <App state={state} addMessage={addMessage}/>
  //   </React.StrictMode>
  // );
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


