import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage.js';
import expenses from '../fixtures/expenses.js';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage
    expense={ expenses[2] }
    editExpense={ editExpense }
    removeExpense= { removeExpense }
    history={ history }
  />);
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('Connect(ExpenseForm)').prop('onSubmit')(expenses[2]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle onRemove', () => {
  wrapper.find('Connect(ExpenseForm)').prop('onRemove')(expenses[2].id);
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[2].id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
