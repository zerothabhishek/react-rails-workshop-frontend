import React, { useState } from 'react';
import ListCard from './ListCard.js';
import CardForm from './CardForm';
import MyModal from './MyModal.js';

function List(props) {
  let listName = props.listData.title || "-";
  let cards = props.listData.cards || [];

  let [formOpen, setFormOpen] = useState(false);

  function openForm(event) {
    event.preventDefault();
    setFormOpen(true);
  }

  const closeCard = function(){
    setFormOpen(false);
  }

  return(
    <div className='List'>
      <div className='ListHeader'>
        {listName}
      </div>
      <br />

      <div className='CardList' >
        { cards.map((card) => <ListCard key={card.id} card={card} />) }
      </div>

      <div className='New'>
        <button className='smooth-button' onClick={openForm}> + </button>
      </div>

      { formOpen &&
        <MyModal show={formOpen} onClose={closeCard} >
          <CardForm list={listName} />
        </MyModal> }
    </div>
  );
}

export default List;
