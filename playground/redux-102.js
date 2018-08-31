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

const store = createStore((state = {count: 0}, action) => {
  console.log("Running...");
  console.log(action);

  // if (action.type == "INCREASE_COUNT") return { count: state.count += 1 }
  // else if (action.type == "DECREASE_COUNT") return { count: state.count -= 1 }
  // else return state;

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
});

const unsubscribe = store.subscribe(_ => console.log('store:', store.getState()));

store.dispatch(modifyCount());
store.dispatch(modifyCount());

store.dispatch(resetCount(100));
store.dispatch(resetCount(50));

store.dispatch(modifyCount(5));
store.dispatch(modifyCount(-1));

store.dispatch(resetCount());
