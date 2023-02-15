import React from 'react';
import BackwardCounter from './BackwardCounter';
import ForwardCounter from './ForwardCounter';

function CounterApp() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default CounterApp;
