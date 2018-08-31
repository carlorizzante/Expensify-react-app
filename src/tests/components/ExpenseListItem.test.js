import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem.js';
import expenses from '../fixtures/expenses.js';

test('should render the expense', () => {
  const expense = {
    dispatch: () => {},
    ...expenses[1]
  }
  const wrapper = shallow(<ExpenseListItem { ...expense }/>);
  expect(wrapper).toMatchSnapshot();
});
