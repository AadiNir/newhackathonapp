import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Createstartupfunding from './components/Createstartupfunding';
import Gallery from './components/Gallery';
function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path="/createcampaign" element={<Createstartupfunding/>}/>
    <Route path="/view" element={<Gallery/>}/>
    </Routes>
    </Router>
      
    </div>
  );
}

export default App;
