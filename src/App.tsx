import React from 'react';
import logo from './logo.svg';
import './App.css';
import Standings from "./standings/Standings";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1>Rez Prk Putting League</h1>

      </header>
      <Standings></Standings>
    </div>
  );
}

export default App;
