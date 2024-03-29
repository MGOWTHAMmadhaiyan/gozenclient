// reducers.js
import { combineReducers } from 'redux';

// Reducer for counter
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log("innnnnnccc")
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
