import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses.js';
import selectExpensesTotal from '../selectors/expenses-total.js';

export const ExpensesSummary = ({ count, total }) => {
  const label = count > 1 ? "expenses" : "expense";
  const formattedTotal = numeral(total / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <strong>{ count }</strong> { label } totalling <strong>{ formattedTotal }</strong></h1>
        <div className="page-header__actions">
          <Link className="btn btn-primary" to="/create">Add Expense</Link>
        </div>
      </div>
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
