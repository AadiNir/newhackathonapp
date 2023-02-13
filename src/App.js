import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Createstartupfunding from './components/Createstartupfunding';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/createcampaign" element={<Createstartupfunding/>}/>

    </Routes>
    </Router>
      
    </div>
  );
}

export default App;
