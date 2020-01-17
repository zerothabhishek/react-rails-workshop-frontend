import React from 'react';
// import logo from './logo.svg';
import Hello from './components/Hello.js';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      <Hello name="abhishek" />
    </div>
  );
}

export default App;


/*
## Step-2b: basic components

- Component in a separate file
- Try: File component for showing current date

*/