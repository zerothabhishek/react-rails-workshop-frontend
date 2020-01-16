import React, { useState } from 'react';
import FullCard from './FullCard.js';
import MyModal from './MyModal';


// To move:
// POST api/v1/dashboards/1/lists/1/cards/4/move
// {"direction": "down" }

function ListCard(props) {
  const [showFull, setShowFull] = useState(false);

  const openCard = function(event){
    event.preventDefault();
    setShowFull(true);
  }

  const closeCard = function(){
    setShowFull(false);
  }

  const moveUp = function() {
    // TODO
  }

  const moveDown = function() {
    // TODO
  }

  return (
    <>
      <div className='ListCard'>
        <a href={`/c/${props.card.id}`} onClick={openCard}>{props.card.title}</a>
        {/* <button onClick={openCard}>{props.card.title}</button> */}

        <br/><br/>
        <div className='moveButtons'>
          <button className='smooth-button' onClick={moveUp}> ↑ </button>
          <button className='smooth-button' onClick={moveDown}> ↓ </button>
        </div>
      </div>

      {/* Try conditional here instead of showFull */}
      {/* <FullCard show={showFull} onClose={closeCard} card={props.card} /> */}
      { showFull &&
        <MyModal show={showFull} onClose={closeCard} >
          <FullCard card={props.card}  />
        </MyModal>
      }
    </>
  );
}

export default ListCard;
