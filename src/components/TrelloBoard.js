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
        <TrelloList key={i} title={list.title} cards={list.cards} />
      )}
    </div>
  );
}

export default TrelloBoard;
