import React, { useState } from 'react';

function MyForm2() {
  let [yourName, setYourName] = useState('');

  return(
    <form className="MyForm" action="/">
      <div className="smallText"><span>MyForm2</span></div>

      <div className="YourNameInput">
        <label>
          Your name please
        </label>

        <input
          type="text"
          name="your-name"
          value={yourName}
        />
      </div>

      <div className="FormHello">
        Hello {yourName}
      </div>
    </form>
);
}

export default MyForm2;
