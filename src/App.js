import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board.js';
import SampleBoardData from './SampleData';

const DataURL = '/api/v1/dashboards/1/213';

function App() {
  let [boardData, setBoardData] = useState([]);

  useEffect(() => {
    fetch(DataURL)
    .then((res) => res.json())
    .then((data) => { 
      console.log(data);
      setBoardData(data) 
    })
    .catch(() => { 
      console.log('Problem fetching data'); 
      setBoardData(SampleBoardData)
    });
  }, [boardData.count]);  // TODO: find a better condition

  return (
    <div className="App">
      { boardData.lists && <Board boardData={boardData} /> }
    </div>
  );
}

export default App;
