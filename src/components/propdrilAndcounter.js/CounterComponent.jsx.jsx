
import { useState } from 'react';
import ChildCounter from './ChildCounter'


//STATE MANAGEMENT (TASK 2)
//STATE LIFT-UP OR PROPS DRILLING (TASK 8)

function CounterComponent() {
  const [Count, setCount] = useState(0)
  function increament(){
    setCount(Count + 1)
  }
  function decreament(){
    setCount(Count - 1)
  }
  return (
    <div>
      <h1>Parent to child prop drill</h1>
      <p>Count: {Count}</p>
      <ChildCounter count={Count} increament={increament} decreament={decreament} /></div>
  )
}


export default CounterComponent;
