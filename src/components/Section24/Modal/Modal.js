import React from 'react';

import './Modal.css';
import {Transition} from "react-transition-group";

const modal = (props) => {

  const renderModal = state => {
    let classes = 'Modal'
    if(state === 'entering') classes += ' open'
    if(state === 'exiting') classes += ' close'

    return (
      <div className={classes}>
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
      </div>
    )
  }

  return (
    <Transition in={props.show} timeout={300} mountOnEnter unmountOnExit>
      {state => renderModal(state)}
    </Transition>
  );
}

export default modal;