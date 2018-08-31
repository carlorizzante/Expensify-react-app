import { addExpense, editExpense, removeExpense } from '../../actions/expenses.js';
import moment from 'moment';

test('should setup add expense action object with provided values', () => {
  const expenseDetails = {
    description: 'Donec id elit non mi porta gravida at eget metus.',
    note: 'Nullam id dolor id nibh ultricies vehicula ut id elit.' ,
    amount: Math.floor(Math.random() * 1000),
    createdAt: moment(Math.floor(Math.random() * 15**10))
  }
  const action = addExpense(expenseDetails);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseDetails
    }
  })
});

test('should setup add expense action object with default values', () => {
  const expenseDefault = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }
  const action = addExpense({});
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseDefault
    }
  });
});

test('should setup remove expense action object', () => {
  const id = Math.floor(Math.random() * 1000);
  const action = removeExpense(id)
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id
  });
});

test('should setup edit expense action object', () => {
  const id = Math.floor(Math.random() * 1000);
  const updates = {
    not_relevant: 'Maecenas faucibus mollis interdum.'
  }
  const action = editExpense(id, updates);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });
});
