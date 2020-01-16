import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board.js';
// import SampleListItems from './SampleData.js';

// const CardDataURL = 'http://localhost:3000/foo.json';
const CardDataURL = '/cards'; // => /api/v1/dashboards/1/

// data.lists[0].cards
// data.lists[1].cards

function App() {
  // let listData = SampleListItems;

  let [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch(CardDataURL)
    .then((res) => res.json())
    .then((data) => { console.log(data); setCardData(data) })
    .catch(() => { console.log('Problem fetching data')});
  }, [cardData.count]); // TODO: find a better condition

  return (
    <div className="App">
      <Board listData={cardData} />
    </div>
  );
}

export default App;
