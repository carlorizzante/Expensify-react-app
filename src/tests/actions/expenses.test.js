import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addExpense,
  startAddExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses
 } from '../../actions/expenses.js';
import moment from 'moment';
import expenses from '../fixtures/expenses.js';
import database from '../../firebase/firebase.js';

const createMockStore = configureMockStore([ thunk ]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref('expenses').set(expensesData).then(() => done());
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

// Before Firebase
// test('should setup add expense action object with default values', () => {
//   const expenseDefault = {
//     description: '',
//     note: '',
//     amount: 0,
//     createdAt: 0
//   }
//   const action = addExpense({});
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       ...expenseDefault
//     }
//   });
// });

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'abc',
    createdAt: 1000
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      // expect(1).toBe(2);
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with default values to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefault = { // Default expense
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      // expect(1).toBe(2);
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefault
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefault);
      done();
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
    description: 'Maecenas faucibus mollis interdum.'
  }
  const action = editExpense(id, updates);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });
});

test('should setup set expenses action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch expenses from database', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
      done();
    });
});
