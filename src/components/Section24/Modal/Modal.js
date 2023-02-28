import React from 'react';

import './Modal.css';

const modal = (props) => {
  let classes = 'Modal'
  if(props.show === 'entering') {
    classes += ' open'
  }
  if(props.show === 'exiting') {
    classes += ' close'
  }
  return (
    <div className={classes}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>Dismiss</button>
    </div>
  );
}

export default modal;