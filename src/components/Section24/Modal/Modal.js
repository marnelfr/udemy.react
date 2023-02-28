import React from 'react';

import './Modal.css';

const modal = (props) => {
  return (
    <div className={`Modal ${props.show ? 'open' : 'close'}`}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
  );
}

export default modal;