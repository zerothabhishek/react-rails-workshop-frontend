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
## Step-5a: My-Trello

- What we are trying to build: http://localhost:3000/my-trello.png
- Review the API
- Review the components:
  - TrelloCard
  - TrelloList
  - TrelloBoard
  - TrelloCardForm

- Try: Changing props/state on the components
- Review: saveCard.js

*/