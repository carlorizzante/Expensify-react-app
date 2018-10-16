import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem.js';
import selectExpenses from '../selectors/expenses.js';

export const ExpenseList = (props) => (
  <div className="content-container list">
    <div className="list-header">
      <div className="hide-on-desktop">Expenses</div>
      <div className="hide-on-mobile">Expense</div>
      <div className="hide-on-mobile">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0
        ? ( <div className="list-item-message">
          <p>No expenses. Go head, add one!</p>
        </div> )
        : (
          props.expenses.map((expense, index) => (
            <ExpenseListItem key={ index } {...expense}/>
          ))
        )
      }
    </div>
  </div>
);

// const ConnectedExpenseList = connect(state => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList);
//
// export default ConnectedExpenseList;

// export default connect(state => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);
