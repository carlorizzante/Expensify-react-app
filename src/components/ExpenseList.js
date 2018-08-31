import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem.js';
import selectExpenses from '../selectors/expenses.js';

export const ExpenseList = (props) => (
  <div>
    <ul>
      {
        props.expenses.length === 0
        ? ( <li>No expense, create one. Go head!</li> )
        : (
          props.expenses.map((expense) => (
            <ExpenseListItem key={ expense.id } {...expense}/>
          ))
        )
      }
    </ul>
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
