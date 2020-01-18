function createURL() {
  return '/api/v1/dashboards/1/lists/1/cards';
}

function updateURL(card) {
  return `/api/v1/dashboards/1/lists/1/cards/${card.id}`
}

function createCard(data) {
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

function updateCard(card, data) {
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


export { createCard, updateCard };
