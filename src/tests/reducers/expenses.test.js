import moment from 'moment';

import expenses from '../fixtures/expenses.js';
import expensesReducer from '../../reducers/expenses.js';

test('should set default state', () => {
  const action = { type: '@@INIT' }
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: 7,
    description: 'A new expense',
    note: '...',
    amount: 700,
    createdAt: moment(2000).valueOf()
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, expense ]);
});

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      description: 'Edited',
      amount: 350
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(expenses.length);
  expect(state[2]).toEqual({ ...state[2], ...action.updates });
});

test('should not edit an expense if not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-3',
    updates: {
      description: 'Edited',
      amount: 350
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state.length).toBe(expenses.length);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
