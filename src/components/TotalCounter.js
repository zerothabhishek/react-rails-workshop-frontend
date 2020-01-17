import React, { useState } from 'react';
import Counter from './Counter.js';


function TotalCounter() {

  let [total, setTotal] = useState(0);

  function changedA(val) {
    setTotal(total + val);
  }

  function changedB(val) {
    setTotal(total + val);
  }

  return(
    <div className="TotalCounter">

      <div className="CounterA Counter">
        Counter A: {"  "}
        <Counter start={0} onChange={changedA} />
      </div>

      <div className="CounterB Counter">
        Counter B: {"  "}
        <Counter start={0} onChange={changedB} />
      </div>

      <div className="TheTotal">
        <span style={{borderBottom: "4px solid hotpink"}}>
          Counter total: {total}
        </span>
      </div>
    </div>
  );
}

export default TotalCounter;
