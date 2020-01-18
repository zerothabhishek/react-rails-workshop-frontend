import React from 'react';
import TrelloList from './TrelloList';

// Props:
//  title: String
//  lists: Array of lists

function TrelloBoard(props) {
  return (
    <div className="TrelloBoard">
      <div className="BoardHeader">
        {props.title}
      </div>
      {props.lists.map((list, i) =>
        <TrelloList title="In-progress" cards={list.cards} />
      )}
    </div>
  );
}

export default TrelloBoard;
