import React from 'react';
import './App.css';
import TrelloCard from './components/TrelloCard';
import TrelloList from './components/TrelloList';
import TrelloBoard from './components/TrelloBoard';
import TrelloModal from './components/TrelloModal';
import TrelloCardForm from './components/TrelloCardForm';


function App() {
  return (
    <div className="App">
      <TrelloCard id={123} title="Install stuff" />
      <TrelloList id={56} title="TODO List" cards={[]} />
      <TrelloBoard id={1} title="Task Board" lists={[]} />
      { true &&
          <TrelloModal onClose={() => {}}>
            <TrelloCardForm card={{}} />
          </TrelloModal> }
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