import React, { useState } from 'react';

function MyForm3() {
  let [yourName, setYourName] = useState('');

  function yourNameChanged(event) {
    setYourName(event.target.value)
  }

  return(
    <form className="MyForm" action="/">
      <div className="smallText"><span>MyForm3</span></div>

      <div className="YourNameInput">
        <label>
          Your name please
        </label>

        <input 
          type="text"
          name="your-name"
          value={yourName}
          onChange={yourNameChanged}
        />
      </div>

      <div className="FormHello">
        Hello {yourName}
      </div>

    </form>
  );
}

export default MyForm3;
