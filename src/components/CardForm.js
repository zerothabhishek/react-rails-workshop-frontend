import React, { useState } from 'react';

function createURL() {
  // POST api/v1/dashboards/1/lists/1/cards
  return '/cards';
}

function updateURL(card) {
  // PUT api/v1/dashboards/1/lists/1/cards/5
  return `/cards/${card.id}`
}

function sendCreate(data) {
  fetch(createURL(), {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) 
  })
  .then(() => {console.log('Done')})
  .catch(() => { console.log('Failed!!')});  
}

function sendUpdate(card, data) {
  fetch(updateURL(card), {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) 
  })
  .then(() => {console.log('Done')})
  .catch(() => { console.log('Failed!!')});
}

function CardForm (props) {

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
    sendCreate(data);
  }

  function handleUpdate() {
    const data = { title, assignee, details };
    sendUpdate(card, data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (card.id) {
      handleUpdate();
    } else {
      handleCreate();
    }
  }

  return (
    <form onSubmit={handleSubmit} className='CardForm'>
      <div>
        Title:
        <input type='text' value={title} onChange={changeTitle} />
      </div>
      <div>
        Assignee:
        <input type='text' value={assignee} onChange={changeAssignee} />
      </div>
      <div>
        Details:
        <input type='text' value={details} onChange={changeDetails} />
      </div>
      <div>
        <button type='submit'> Save</button>
      </div>
    </form>
  );
}

export default CardForm;
