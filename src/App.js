import React from 'react';
import Hello from './components/Hello.js';
import CompWithEvent from './components/CompWithEvent';
import './App.css';
import CompWithState from './components/CompWithState.js';

function App() {
  return (
    <div className="App">
      <Hello name="abhishek" />
      <br/>
      <CompWithEvent />
      <br/>
      {/* <CompWithState /> */}
    </div>
  );
}

export default App;


/*
## Step-2c: Add some state

- CompWithEvent: component with event handler
- CompWithState: component with state

Try:
- Counter component

*/