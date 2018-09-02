import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary.js';

test('should render correctly ExpensesSummary with no expense', () => {
  const wrapper = shallow(<ExpensesSummary count={ 0 } total={ 0 }/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render correctly ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary count={ 1 } total={ 12095 }/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render correctly ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary count={ 3 } total={ 61025 }/>);
  expect(wrapper).toMatchSnapshot();
});
