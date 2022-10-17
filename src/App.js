import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import GamePageContainer from './components/GamePage/GamePageContainer';
import Navbar from './components/Navbar/Navbar';
import StartPage from './components/StartPage/StartPage';
import StatsPage from './components/StatsPage/StatsPage';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPage state={props.state}/>}/>
          <Route path="gamePage/*" element={<GamePageContainer store={props.store}/>}/>
          <Route path="statsPage/*" element={<StatsPage/>}/>
        </Routes>
        <Navbar></Navbar>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

