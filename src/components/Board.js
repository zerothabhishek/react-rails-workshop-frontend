import React from 'react';
import List from './List.js';
import SampleListItems from '../SampleData';


function Board(props) {
  const listNames = Object.keys(props.listData);

  return (
    <div className='Board'>
      {listNames.map((listName, i) =>
        <List key={i} name={listName} cards={ props.listData[listName] }></List>
      )}
    </div>
  );
}

export default Board;
