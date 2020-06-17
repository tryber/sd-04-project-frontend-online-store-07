import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './services/api';

function App() {
  const searchDataFromAPI = () => {
    async function fetchData() {
      api.getCategories()
      .then((categories) => { console.log(categories); });
    }
    fetchData();
  };
  return (
    <div className="App">
      {searchDataFromAPI()}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
