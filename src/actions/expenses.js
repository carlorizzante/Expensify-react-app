import uuid from 'uuid';
import database from '../firebase/firebase.js';

// ADD_EXPENSE
export const addExpense = (expense) => {
  return {
    type: 'ADD_EXPENSE',
    expense
  }
}

// Connect Firebase, store data, dispatch "addExpense"
export const startAddExpense = (expense) => {
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = expense;

  return (dispatch) => {
    const expense = { description, note, amount, createdAt };
    return database.ref('expenses')
      .push(expense)
      .then((ref) => dispatch(addExpense({
        id: ref.key,
        ...expense
      })));
  }
}

// REMOVE_EXPENSE
export const removeExpense = id => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}
// EDIT_EXPENSE
export const editExpense = (id, updates = {}) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// 1. fetch all expenses data once
// 2. parse obtained data into array
export const startSetExpenses = () => {
  const expenses = [];
  return (dispatch) => {
    return database.ref('expenses')
      .once('value')
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        // console.log('startSetExpenses');
        // console.table(expenses);
        dispatch(setExpenses(expenses));
      });
  }
};
