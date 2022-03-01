import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Standings from "./standings/Standings";
import Championship from "./championship/Championship";
import logo from './RezPrkWhite.png';
import Rules from "./rules/Rules";

function App() {
  return (
      <Router>
          <div className="App">
              <header className="App-header">
                  {<img src={logo} className="App-logo" alt="logo" />}
                  <h1>Putting League 2.0</h1>
                  {<img src={logo} className="App-logo" alt="logo" />}
              </header>
              <div className="navMenu">
                  <Link to="/">Standings</Link>
                  <Link to="/playoffs">Championship Seedings</Link>
                  <Link to="/rules">Rules</Link>
              </div>
              <Routes>
                  <Route path='/' element={<Standings/>} />
                  <Route path='/playoffs' element={<Championship/>} />
                  <Route path='/rules' element={<Rules/>} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
