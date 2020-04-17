import React from 'react';
import logo from './Uicon.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome! <code>Ufilms</code> is currently under construction.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCkCfeJCEIHPZamOa0lIlXew"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch videos here in the meantime..
        </a>
      </header>
    </div>
  );
}

export default App;
