import React from 'react';
import './App.css';
import MyForm1 from './components/MyForm1';
import MyForm2 from './components/MyForm2';
import MyForm3 from './components/MyForm3';

function App() {
  return (
    <div className="App">
      <MyForm1 />
      {/* <MyForm2 /> */}
      {/* <MyForm3 /> */}
    </div>
  );
}

export default App;


/*
## Step-3a: Forms

- React forms can be tied to state
  but they need to be 'controlled'

- MyForm1: No state
- MyForm2: Has state but not controlled
- MyForm3: Has controlled state

- Try: Show hello widget only after typing starts 

*/