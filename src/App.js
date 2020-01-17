import React from 'react';
import './App.css';
import MyEffect1 from './components/MyEffect1';
import MyEffect2 from './components/MyEffect2';
import MyEffect3 from './components/MyEffect3';


function App() {
  return (
    <div className="App">
      <MyEffect1 />
    </div>
  );
}

export default App;

/*
## Step-4a: Effects

- Effect: definition
- useEffect: the mechanics
  - ??


- MyEffect1: Set the page title
- MyEffect2: Fetch Ajax data
- MyEffect3: Fetch Ajax data, show loading message
- Try: show proper message when it fails


*/