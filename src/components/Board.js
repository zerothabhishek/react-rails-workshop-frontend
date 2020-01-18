import React from 'react';
import List from './List.js';
import SampleListItems from '../SampleData';


function Board(props) {
  const lists = props.boardData.lists;

  return (
    <div className='Board'>
      <div>
        {props.boardData.title}
      </div>

      {lists.map((listData, i) => 
        <List key={i} listData={listData}></List>
      )}
    </div>
  );
}

export default Board;
