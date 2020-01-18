import React from 'react';
import './App.css';
import TrelloBoard from './components/TrelloBoard';
import SampleBoardData from './SampleData';


function App() {
  const boardData = SampleBoardData;

  return (
    <div className="App">
      <TrelloBoard id={boardData.id} title={boardData.title} lists={boardData.lists} />
    </div>
  );
}

export default App;

/*
## Step-5b: My-Trello

- Build the board UI with sample-data
- Review src/sampleData.js

- Try: making edit-card work (only in UI)
- Try: making add-card work (only in UI)

*/