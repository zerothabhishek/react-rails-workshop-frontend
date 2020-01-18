import React, { useState } from 'react';
import TrelloModal from './TrelloModal';
import TrelloCardForm from './TrelloCardForm';
import TrelloCard from './TrelloCard';

// Props:
//  title: String
//  cards: Array of cards

function TrelloList(props) {

  const [formOpen, setFormOpen] = useState(false);

  function openAddCard(event) {
    event.preventDefault();
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen(false);
  }


  return(
    <div className='TrelloList'>
      <div className='ListHeader'>
        {props.title}
      </div>
      <br />

      <div className='CardList' >
        {props.cards.map((card) =>
          <TrelloCard key={card.id} id={card.id} title={card.title} />
        )}
      </div>

      <div className='New'>
        <button className='smooth-button' onClick={openAddCard}> + </button>
      </div>

      { formOpen &&
        <TrelloModal onClose={closeForm} >
          <TrelloCardForm card={{}} />
        </TrelloModal> }
    </div>
  )
}

export default TrelloList;