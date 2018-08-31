console.log('Redux 101');

import { createStore } from 'redux';

// Action Generators

const modifyCount = (by = 1) => {
  return {
    type: 'MODIFY_COUNT',
    by: by
  }
}

const resetCount = (to = 0) => {
  return {
    type: 'RESET_COUNT',
    to: to
  }
}

// Reducers:
// 1. Reducers are pure functions
// 2. Reducers never change state or action

const reducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'RESET_COUNT':
      return { count: action.to }
      break;
    case 'MODIFY_COUNT':
      return { count: state.count += action.by }
      break;
    default:
      return state;
  }
}

const store = createStore(reducer);

const unsubscribe = store.subscribe(_ => console.log('store:', store.getState()));

store.dispatch(modifyCount());
store.dispatch(modifyCount());

store.dispatch(resetCount(100));
store.dispatch(resetCount(50));

store.dispatch(modifyCount(5));
store.dispatch(modifyCount(-1));

store.dispatch(resetCount());
