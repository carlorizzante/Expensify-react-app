import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseForm } from '../../components/ExpenseForm.js';
import expenses from '../fixtures/expenses.js';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={ expenses[1] }/>);
  expect(wrapper).toMatchSnapshot();
});

test('should not render error message if form has not been submitted', () => {
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper.state('showErrorMsg')).toBe(false);
  expect(wrapper).toMatchSnapshot();
});

test('should render error message for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('showErrorMsg')).toBe(true);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = "New description value"
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('should set note on textarea change', () => {
  const value = "New note value";
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('should set amount if valid input', () => {
  const value = '12.25';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test('should not set amount if not valid input', () => {
  const value = '75.987';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
  expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm
    expense={ expenses[1] }
    onSubmit={ onSubmitSpy }
  />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('showErrorMsg')).toBe(false);
  expect(onSubmitSpy).toHaveBeenCalledWith(expenses[1]);
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper.state('calendarFocused')).toBe(!focused);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toBe(focused);
});
