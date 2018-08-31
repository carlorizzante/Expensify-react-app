import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

console.log('redux-expensify.js');

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt }) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  }
}
// REMOVE_EXPENSE
const removeExpense = id => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}
// EDIT_EXPENSE
const editExpense = (id, updates = {}) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
}
// SET_TEXT_FILTER
const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  }
}
// SORT_BY_DATE
const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  }
}

// SORT_BY_AMOUNT
const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  }
}

// SET_START_DATE
const setStartDate = (date) => {
  return {
    type: 'SET_START_DATE',
    date
  }
}

// SET_END_DATE
const setEndDate = (date) => {
  return {
    type: 'SET_END_DATE',
    date
  }
}

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
      break;
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id != action.id)
      break;
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id == action.id) return { ...expense, ...action.updates }
        else return expense;
      });
      break;
    default:
      return state;
  }
}

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducers = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text }
      break;
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' }
      break;
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' }
      break;
    case 'SET_START_DATE':
      return { ...state, startDate: action.date }
      break;
    case 'SET_END_DATE':
      return { ...state, endDate: action.date }
      break;
    default:
      return state;
  }
}

// January 1st 1970 -> Unix Epoch
// timestamp in milliseconds

// Get Visible Espenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const createdAt = expense.createdAt;
    const startDateMatch = typeof startDate !== 'number' || createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((exp1, exp2) => {
    if (sortBy == 'amount') return exp1.amount > exp2.amount;
    else return exp1.createdAt > exp2.createdAt;
  });
}

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducers
  })
);

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
