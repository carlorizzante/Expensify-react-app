import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { ExpenseListFilters } from '../../components/ExpenseListFilters.js';
import { filters, altFilters } from '../fixtures/filters.js';

let wrapper;
let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount  = jest.fn();
  sortByDate    = jest.fn();
  setStartDate  = jest.fn();
  setEndDate    = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    filters={ filters }
    setTextFilter={ setTextFilter }
    sortByAmount={ sortByAmount }
    sortByDate={ sortByDate }
    setStartDate={ setStartDate }
    setEndDate={ setEndDate }
  />);
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  wrapper.find('input').simulate('change', {
    target: { value: 'abc' }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith('abc');
});

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value: 'date' }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'amount' }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDate = moment(0).add(4, "days");
  const endDate   = moment(0).add(5, "days");
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
    startDate,
    endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe('endDate');
});
