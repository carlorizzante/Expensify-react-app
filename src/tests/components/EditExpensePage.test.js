import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage.js';
import expenses from '../fixtures/expenses.js';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage
    expense={ expenses[2] }
    startEditExpense={ startEditExpense }
    startRemoveExpense= { startRemoveExpense }
    history={ history }
  />);
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('Connect(ExpenseForm)').prop('onSubmit')(expenses[2]);
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle onRemove', () => {
  wrapper.find('Connect(ExpenseForm)').prop('onRemove')(expenses[2].id);
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2].id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
