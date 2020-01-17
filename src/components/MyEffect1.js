import React, { useState, useEffect } from 'react';

function MyEffect1(props) {
  const [count, setCount] = useState(0);

  function clickHandler() {
    let newState = count + 1;
    setCount(newState);
  }

  useEffect(function(){
    document.title = `You clicked ${count} times`;
  }, [count])

  return (
    <div className="MyEffect">
      {count}
      <br />
      <button onClick={clickHandler}>
        Click me and check count
      </button>
    </div>
  );
}

export default MyEffect1;
