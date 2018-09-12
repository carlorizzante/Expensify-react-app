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
