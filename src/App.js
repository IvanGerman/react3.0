import {Route, Routes} from 'react-router-dom';

import './App.css';
import { FormikPageContainer } from './components/FormikPage/FormikPageContainer';
import  GamePageContainer from './components/GamePage/GamePageContainer';
import Navbar from './components/Navbar/Navbar';
import { StartPageContainer } from './components/StartPage/StartPageContainer';
import  StatsPageContainer  from './components/StatsPage/StatsPageContainer';
import StatsSinglePage from './components/StatsPage/StatsSinglePage/StatsSinglePage';
import UseHooksPage from './components/UseHooksPage/UseHooksPage';


const App = (props) => { 
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<StartPageContainer/>}/>
          <Route path="gamePage/*" element={<GamePageContainer/>}/>
          {/* <Route path="/" element={<StartPage state={props.state}/>}/> */}
          {/* <Route path="gamePage/*" element={<GamePageContainer store={props.store}/>}/> */}
          <Route path="statsPage/*" element={<StatsPageContainer/>}/>
          <Route path="statssingle/:statsid" element={<StatsSinglePage/>}/>
          <Route path="formikPage/*" element={<FormikPageContainer/>}/>
          <Route path="useHooksPage/*" element={<UseHooksPage/>}/> 
        </Routes>
        <Navbar></Navbar>
      </div>
  );
}

export default App;

