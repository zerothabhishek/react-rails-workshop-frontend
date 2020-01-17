import React from 'react';

function MyForm1() {
  return(
    <form className="MyForm" action="/">
      <div className="smallText"><span>MyForm1</span></div>

      <div className="YourNameInput">
        <label>
          Your name please
        </label>

        <input
          type="text"
          name="your-name"
        />
      </div>

      <div className="FormHello">
        Hello ??
      </div>
    </form>
  );
}

export default MyForm1;
