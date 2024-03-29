import React, { useState } from 'react';
import {Button } from '@mui/material'



//COMPONENT COMPOSITION HOC (TASK 5)

// Higher-order component (HOC) to add toggle functionality
const withToggle = (WrappedComponent) => {
  return function WithToggle(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return <WrappedComponent {...props} isOpen={isOpen} toggle={toggle} />;
  };
};

// Example component using the withToggle HOC
const MyComponent = ({isOpen, toggle }) => {
  return (
    <div>
      <h1>COMPOSITION HOC</h1>
      <Button onClick={toggle} variant="contained" color="primary">{isOpen ? 'Hide' : 'Show'}</Button>
      {isOpen && <div>Content to be toggled</div>}
    </div>
  );
};

// Enhance MyComponent with toggle functionality
const CompositionHOC = withToggle(MyComponent);

export default CompositionHOC;
