import React, { useState } from 'react';

function MyModal (props) {
  // let [displayState, setDisplayState] = useState(props.show);

  let displayStyle;
  // if (displayState === true) {
  //   displayStyle = {}
  // } else {
  //   displayStyle = { display: 'none' };
  // }
  if (props.show === false) {
    displayStyle = { display: 'none' };
  } else {
    displayStyle = {};
  }

  function closeMe(){
    // setDisplayState(false);
    props.onClose();
  }

  return(
    <div className='modal' style={displayStyle}>
      <button onClick={closeMe}>Close</button>
      {props.children}
    </div>
  );
}

export default MyModal;
