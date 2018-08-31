import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage.js';

test('should render the Dashboard page', () => {
  const wrapper = shallow(<ExpenseDashboardPage/>);
  expect(wrapper).toMatchSnapshot();
});
