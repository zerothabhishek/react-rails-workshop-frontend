import React, { useState } from 'react';

// Props:
//  onClose: Function
//  children: nested JSX
//
// Usage:
//   <TrelloModal onClose={closeFn}>
//     The JSX Content
//   </TrelloModal>
//

function TrelloModal(props) {

  let [displayState, setDisplayState] = useState(true);

  let theStyle = { display: 'none' };
  if (displayState === true) {
    theStyle = {};
  }

  function closeMe() {
    if (props.onClose) props.onClose();
    setDisplayState(false);
  }

  return(
    <div className='TrelloModal' style={theStyle}>
      <button onClick={closeMe}>x</button>
      {props.children}
    </div>
  )
}

export default TrelloModal;
