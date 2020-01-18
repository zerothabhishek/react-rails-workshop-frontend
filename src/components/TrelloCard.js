import React, { useState } from 'react';
import TrelloModal from './TrelloModal';
import TrelloCardForm from './TrelloCardForm';

// Props:
//  id: number
//  title: string

function TrelloCard(props) {

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

  const sampleCard = { title: props.title, details: 'some details', assignee: 'sample@example.org' };

  return(
    <>
      <div className='TrelloCard'>
        <a href={`/c/${props.id}`} onClick={openCard}>{props.title}</a>

        <br/><br/>
        <div className='moveButtons'>
          <button className='smooth-button' onClick={moveUp}> ↑ </button>
          <button className='smooth-button' onClick={moveDown}> ↓ </button>
        </div>
      </div>

      { showFull &&
        <TrelloModal onClose={closeCard}>
          <TrelloCardForm card={sampleCard} />
        </TrelloModal>
      }
    </>
  )
}

export default TrelloCard;
