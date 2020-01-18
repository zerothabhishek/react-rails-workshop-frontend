import React, { useState } from 'react';
import { createCard, updateCard } from '../saveCard.js';


function TrelloCardForm(props) {
  let card = props.card || {} ;

  const [title, setTitle] = useState(card.title);
  const [details, setDetails] = useState(card.details);
  const [assignee, setAssignee] = useState(card.assignee);

  function changeTitle(event) {
    setTitle(event.target.value)
  }

  function changeAssignee(event) {
    setAssignee(event.target.value);
  }

  function changeDetails(event) {
    setDetails(event.target.value);
  }

  function handleCreate() {
    const data = { title, assignee, details };
    data.listName = props.listName;
    createCard(data);
  }

  function handleUpdate() {
    const data = { title, assignee, details };
    updateCard(card, data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (card.id) {
      handleUpdate();
    } else {
      handleCreate();
    }
  }

  return(
    <form onSubmit={handleSubmit} className='TrelloCardForm'>
      <div className='FormField'>
        <label>Title:</label>
        <input type='text' value={title} onChange={changeTitle} />
      </div>

      <div className='FormField'>
        <label> Assignee: </label>
        <input type='text' value={assignee} onChange={changeAssignee} />
      </div>

      <div className='FormField'>
        <label> Details: </label>
        <input type='text' value={details} onChange={changeDetails} />
      </div>

      <div className='FormField'>
        <button type='submit'> Save </button>
      </div>
    </form>
  )
}

export default TrelloCardForm;
