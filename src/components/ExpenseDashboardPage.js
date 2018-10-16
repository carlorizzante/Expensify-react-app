import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary.js';

const ExpenseDashboardPage = (props) => (
  <div>
    {/* <h1>Dashboard</h1> */}
    <ExpensesSummary/>
    <ExpenseListFilters/>
    <ExpenseList/>
  </div>
);

export default ExpenseDashboardPage;
