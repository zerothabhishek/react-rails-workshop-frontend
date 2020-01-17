import React, { useState } from 'react';

import './App.css';
import TotalCounter from './components/TotalCounter';

function App() {
  return (
    <div className="App">
      <TotalCounter />
    </div>
  );
}

export default App;


/*
## Step-2e: Lifting state up

- Parent component passes data to child using props
- Child component cant pass data directly to parent
- The technique used is called lifting state up

- TotalCounter:
  - TotalCounter passes a function to Counter
  - Counter calls it when state changes
  - TotalCounter then recalculates

- Try:
  What if Counter is called without onChange ? Fix code for that

- Also note:
  - TotalCounter.js:21 - creating space
  - TotalCounter.js:31 - inline styles
*/