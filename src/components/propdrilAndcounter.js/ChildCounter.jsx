

import React from 'react';
import GrandChildCounter from './GrandChildCounter'
const ChildCounter = ({ count, increament,decreament }) => {
    return (
      <div>
        <GrandChildCounter count={count} increament={increament} decreament={decreament}  />
      </div>
    );
  };
  

export default ChildCounter;
