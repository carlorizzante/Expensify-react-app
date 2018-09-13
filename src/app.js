import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';

import AppRouter from './routers/AppRouter.js';
import storeConfig from './store/store.config.js';

// import { addExpense } from './actions/expenses.js';
import { startSetExpenses } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import firebase from './firebase/firebase.js';

// Initialize store
const store = storeConfig();

const jsx = (
  <Provider store={ store }>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses())
  .then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
  });

// ...

let count = 0;
const unsubscribe = store.subscribe(_ => {
  const { expenses, filters } = store.getState();
  // console.log(count++, getVisibleExpenses(expenses, filters));
  // console.log("getVisibleExpenses");
  // console.table(getVisibleExpenses(expenses, filters));
});

// ...

// addExpense -> Water bill
// addExpense -> Gas bill
// setTextFilter -> bill (2 items) -> water (1 item)
// getVisibleExpenses -> print visible expenses on screen (1 item)

// store.dispatch(addExpense({
//   description: "Coffee",
//   note: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
//   amount: 245,
//   createdAt: moment().valueOf()
// }));
//
// store.dispatch(addExpense({
//   description: "Water bill",
//   note: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
//   amount: 12750,
//   createdAt: 200
// }));
//
// store.dispatch(addExpense({
//   description: "Gas bill",
//   note: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
//   amount: 25975,
//   createdAt: 100
// }));
//
// store.dispatch(addExpense({
//   description: "Rent",
//   note: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
//   amount: 100000,
//   createdAt: 50
// }));

// ...

// store.dispatch(setTextFilter("bill"));
// store.dispatch(setTextFilter("water"));
//
// setTimeout(() => store.dispatch(setTextFilter("gas")), 1000);
// setTimeout(() => store.dispatch(setTextFilter('')), 2000);
//
// const state = store.getState();
// console.table(getVisibleExpenses(state.expenses, state.filters));

// ...

// let count = 0;
// const unsubscribe = store.subscribe(_ => {
//   const { expenses, filters } = store.getState();
//   console.log(count++, getVisibleExpenses(expenses, filters));
// });
//
// const expenseOne = store.dispatch(addExpense({
//   description: 'Fusce dapibus loAn, tellus ac cursus commodo.',
//   note: 'Etiam porta sem malesuada magna mollis euismod.',
//   amount: 3700,
//   createdAt: 1000
// }));
//
// const expenseTwo = store.dispatch(addExpense({
//   description: 'Rent integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
//   note: 'Cras mattis consectetur purus sit amet fermentum.',
//   amount: 5500,
//   createdAt: 2000
// }));
