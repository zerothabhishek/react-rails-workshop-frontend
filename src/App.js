import React from 'react';
import Hello from './components/Hello.js';
import Counter from './components/Counter.js';
import Counter2 from './components/Counter2.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hello name="abhishek" />
      <br/>
      <Counter start={10} />
      <br />
      {/* <Counter2 start={100} /> */}
    </div>
  );
}

export default App;


/*
## Step-2d: State and props

- Counter: has both state and prop
- Try: Add prop to count backwards
- The idea: 
    UI = fn(state, props)
  ie:
  - When state and props change UI gets re-rendered
  - Try: changing state and prop from Webtools
  - While re-rendering, the entire component function is executed again
    so local variables get re-initialized
  - Counter2: local variable does not change

*/