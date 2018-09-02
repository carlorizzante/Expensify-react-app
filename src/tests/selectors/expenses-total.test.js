import selectExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses.js';

test('should return zero (0) if no expenses', () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
  const res = selectExpensesTotal([expenses[1]]);
  expect(res).toBe(expenses[1].amount);
});

test('should correctly add up multiple expenses', () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(600);
});
