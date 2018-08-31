import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters.js';
import moment from 'moment';

test('should generate set text filter action object with passed argument', () => {
  const texts = ['Dapibus', 'Cras', 'Commodo', 'Mollis', 'Lorem'];
  const text = texts[Math.floor(Math.random() * texts.length)];
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: text
  });
});

test('should generate set text filter action object with default argument', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ""
  });
});

test('should generate set sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate set sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should generate set start date action object', () => {
  const date = moment(Math.floor(Math.random() * 10**12));
  const action = setStartDate(date);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: date
  });
});

test('should generate set end date action object', () => {
  const date = moment(Math.floor(Math.random() * 10**12));
  const action = setEndDate(date);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: date
  });
});
