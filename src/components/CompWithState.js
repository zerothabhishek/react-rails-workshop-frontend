import React, { useState } from 'react';

function CompWithState() {
  const [myState, setMyState] = useState(0);

  function clickHandler() {
    console.log('You clicked !');
    let newState = myState + 1;
    setMyState(newState);
  }

  return (
    <div>
      <button onClick={clickHandler}>
        Click me and check myState
      </button>
      <br></br>
      <b>myState: {myState}</b>
    </div>
  );
}

export default CompWithState;
