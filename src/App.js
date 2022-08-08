import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import StartPage from './StartPage.js';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        project react3.0
        <div className='routes-div'>
          <Route path='/gamePage' component={null}></Route>
          <Route path='/gameStats' component={null}></Route>
        </div>
        <StartPage key1="111" key2="222"/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

