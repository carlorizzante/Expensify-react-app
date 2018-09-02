import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses.js';
import selectExpensesTotal from '../selectors/expenses-total.js';

export const ExpensesSummary = ({ count, total }) => {
  const label = count > 1 ? "expenses" : "expense";
  const formattedTotal = numeral(total / 100).format('$0,0.00');
  return (
    <div>
      <h1>Viewing { count } { label } totalling { formattedTotal }</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters);
  const count = expenses.length;
  const total = selectExpensesTotal(expenses);
  return { count, total }
}

export default connect(mapStateToProps)(ExpensesSummary);
