import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(props.start);

  function clickHandler() {
    console.log('You clicked !');
    let newState = count + 1;
    setCount(newState);
  }

  console.log('Rendering Counter..', props.start, count);

  return (
    <div>
      <button onClick={clickHandler}>
        Click me and check count
      </button>
      <br />
      <div>
        State (count): {count}
      </div>
      <div>
        Props (start): {props.start}
      </div>
    </div>
  );
}

export default Counter;
