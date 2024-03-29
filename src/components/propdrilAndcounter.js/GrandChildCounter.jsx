import React from 'react';
import {Button} from '@mui/material'

const GrandChildCounter = ({ count, increament,decreament }) => {
  return (
    <div>
      <h3>Grandchild</h3>
      <p>Count: {count}</p>
      <Button onClick={increament} variant="contained" color="primary">Increment</Button>
      <Button onClick={decreament} variant="contained" color="primary"
      >Decreament</Button>

    </div>
  );
};

export default GrandChildCounter;
