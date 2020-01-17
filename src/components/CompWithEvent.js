import React from 'react';

function CompWithEvent() {
  function clickHandler() {
    console.log('You clicked !');
  }

  return (
    <div>
      <button onClick={clickHandler}>
        Click me and check console
      </button>
    </div>
  );
}

export default CompWithEvent;
