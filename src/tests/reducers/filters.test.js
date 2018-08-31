import filtersReducer from '../../reducers/filters.js';
import moment from 'moment';

const initialState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

test('should setup default filter values', () => {
  const action = { type: '@@INIT' };
  const state = filtersReducer(undefined, action);
  expect(state).toEqual(initialState);
});

test('should set text filter', () => {
  const action = { type: 'SET_TEXT_FILTER', text: 'Lorem Ipsum' };
  const state = filtersReducer(initialState, action);
  expect(state.text).toBe('Lorem Ipsum');
});

test('should setup sortBy to date', () => {
  const currentState = {
    ...initialState,
    sortBy: 'amount'
  }
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should setup sortBy to amount', () => {
  const action = { type: 'SORT_BY_AMOUNT' };
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toBe('amount');
});

test('should set start date filter', () => {
  const date = moment();
  const action = { type: 'SET_START_DATE', date }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(date);
});

test('should set end date filter', () => {
  const date = moment();
  const action = { type: 'SET_END_DATE', date }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(date);
});
