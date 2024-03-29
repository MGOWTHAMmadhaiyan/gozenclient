// Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './store/actions';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>STORE CONCEPT COUNTER</h2>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
