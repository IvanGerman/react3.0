import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import GamePage from './components/GamePage/GamePage';
import Navbar from './components/Navbar/Navbar';
import StartPage from './components/StartPage/StartPage';
import StatsPage from './components/StatsPage/StatsPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage key1="111" key2="222"/>}/>
          <Route path="gamePage" element={<GamePage/>}/>
          <Route path="statsPage" element={<StatsPage/>}/>
        </Routes>
        <Navbar></Navbar>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

