import React from 'react';

const ChildComponent = () => {
  // Simulating an error
  throw new Error('Error from ChildComponent');
  return <div>Child Component</div>;
};

export default ChildComponent;