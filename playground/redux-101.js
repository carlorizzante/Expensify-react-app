console.log('Redux 101');

import { createStore } from 'redux';

const store = createStore((state = {count: 0}, action) => {
  console.log("Running...");
  console.log(action);

  // if (action.type == "INCREASE_COUNT") return { count: state.count += 1 }
  // else if (action.type == "DECREASE_COUNT") return { count: state.count -= 1 }
  // else return state;

  switch (action.type) {
    case 'SET_COUNT':
      return { count: action.to }
      break;
    case 'INCREASE_COUNT':
      return { count: state.count += 1 }
      break;
    case 'DECREASE_COUNT':
      return { count: state.count -= 1 }
      break;
    case 'RESET_COUNT':
      return { count: 0 }
      break;
    case 'INCREASE_COUNT_BY':
      return { count: state.count += action.by }
      break;
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(_ => console.log('store:', store.getState()));

// console.log(store.getState());

store.dispatch({
  type: 'INCREASE_COUNT'
});

store.dispatch({
  type: 'SET_COUNT',
  to: 100
});

store.dispatch({
  type: 'INCREASE_COUNT_BY',
  by: 5
});

store.dispatch({
  type: 'RESET_COUNT'
});

store.dispatch({
  type: 'DECREASE_COUNT'
});
