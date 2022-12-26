import {Route, Routes} from 'react-router-dom';

import './App.css';
import  GamePageContainer from './components/GamePage/GamePageContainer';
import Navbar from './components/Navbar/Navbar';
import { StartPageContainer } from './components/StartPage/StartPageContainer';
import StatsPage from './components/StatsPage/StatsPage';
import StatsSinglePage from './components/StatsPage/StatsSinglePage/StatsSinglePage';


const App = (props) => { 
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPageContainer/>}/>
          <Route path="gamePage/*" element={<GamePageContainer/>}/>
          {/* <Route path="/" element={<StartPage state={props.state}/>}/> */}
          {/* <Route path="gamePage/*" element={<GamePageContainer store={props.store}/>}/> */}
          <Route path="statsPage/*" element={<StatsPage/>}/>
          <Route path="statssingle/:statsid" element={<StatsSinglePage/>}/>
        </Routes>
        <Navbar></Navbar>
      </div>
  );
}

export default App;

