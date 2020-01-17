import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(props.start || 0);

  function clickHandler() {
    let newState = count + 1;
    setCount(newState);
    props.onChange(newState);
  }

  return (
    <span>
      {count}
      <br />
      <button onClick={clickHandler}>
        Click me and check count
      </button>
    </span>
  );
}

export default Counter;
