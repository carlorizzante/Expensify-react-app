import { createStore, combineReducers } from 'redux';

console.log('redux-expensify.js');

let count = 0;
const unsubscribe = store.subscribe(_ => {
  const { expenses, filters } = store.getState();
  console.log(count++, getVisibleExpenses(expenses, filters));
});

const expenseOne = store.dispatch(addExpense({
  description: 'Fusce dapibus loAn, tellus ac cursus commodo.',
  note: 'Etiam porta sem malesuada magna mollis euismod.',
  amount: 3700,
  createdAt: 1000
}));

const expenseTwo = store.dispatch(addExpense({
  description: 'Rent integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  note: 'Cras mattis consectetur purus sit amet fermentum.',
  amount: 5500,
  createdAt: 2000
}));

// store.dispatch(removeExpense(expenseOne.expense.id));
// store.dispatch(editExpense(expenseTwo.expense.id, { description: "Something new", amount: 1000 }));

// console.log("Set text filter to 'rent'");
// store.dispatch(setTextFilter('rent'));
//
// console.log("Set text filter to 'loan'");
// store.dispatch(setTextFilter('loan'));
//
// console.log("Remove text filter");
// store.dispatch(setTextFilter());

console.log("Sort by amount");
store.dispatch(sortByAmount());

console.log("Sort by Date");
store.dispatch(sortByDate());

// console.log('filter by dates');
// store.dispatch(setStartDate(1000));
// store.dispatch(setEndDate(1300));
//
// console.log('remove date filters');
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

const demoState = {
  expenses: [{
    id: 'sdkjf',
    description: 'Maecenas faucibus mollis interdum.',
    note: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    amount: 54500, // pennies
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}
