import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Standings from "./standings/Standings";
import Championship from "./championship/Championship";


function App() {
  return (
      <Router>
          <div className="App">
              <header className="App-header">
                  {/*<img src={logo} className="App-logo" alt="logo" />*/}
                  <h1>Rez Prk Putting League</h1>
              </header>
              <div className="navMenu">
                  <Link to="/">Standings</Link>
                  <Link to="/playoffs">Championship Seedings</Link>
                  {/*<Link to="/stats">Stats</Link>*/}
              </div>
              <Routes>
                  <Route path='/' element={<Standings/>} />
                  <Route path='/playoffs' element={<Championship/>} />
              </Routes>



              {/*<Standings></Standings>*/}
          </div>

      </Router>


  );
}

export default App;
