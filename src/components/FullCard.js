import React from 'react';
import CardForm from './CardForm'


function FullCard(props) {
  return(
    <CardForm card={props.card} />
  );
}

export default FullCard;
