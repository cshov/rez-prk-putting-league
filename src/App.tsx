import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Standings from "./standings/Standings";
import Championship from "./championship/Championship";
import logo from './RezPrkWhite.png';

function App() {
  return (
      <Router>
          <div className="App">
              <header className="App-header">
                  {<img src={logo} className="App-logo" alt="logo" />}
                  <h1>Indoor Putting League</h1>
                  {<img src={logo} className="App-logo" alt="logo" />}
              </header>
              <div className="navMenu">
                  <Link to="/">Standings</Link>
                  <Link to="/playoffs">Championship Seedings</Link>
              </div>
              <Routes>
                  <Route path='/' element={<Standings/>} />
                  <Route path='/playoffs' element={<Championship/>} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
