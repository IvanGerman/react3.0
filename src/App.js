import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import GamePage from './components/GamePage/GamePage';
import Navbar from './components/Navbar/Navbar';
import StartPage from './components/StartPage/StartPage';
import StatsPage from './components/StatsPage/StatsPage';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage key1={props.data[0].key1} key2={props.data[1].key2}/>}/>
          <Route path="gamePage/*" element={<GamePage/>}/>
          <Route path="statsPage/*" element={<StatsPage/>}/>
        </Routes>
        <Navbar></Navbar>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

