import React, { useState } from 'react';

function Counter2(props) {
  const [count, setCount] = useState(props.start);
  let localVar = 1000;

  function clickHandler() {
    console.log('You clicked !');
    let newState = count + 1;
    localVar += 1;
    setCount(newState);
  }

  console.log('Rendering Counter FTW');

  return (
    <div>
      Counter2:
      <br />
      <button onClick={clickHandler}>
        Click me and check count
      </button>
      <br />
      <b>myState: {count}</b>
       <div> localVar {localVar}</div>
    </div>
  );
}

export default Counter2;
