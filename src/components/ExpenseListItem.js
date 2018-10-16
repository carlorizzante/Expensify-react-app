import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import { startRemoveExpense } from '../actions/expenses.js';

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  // const handleRemove = _ => dispatch(startRemoveExpense(id));
  return (
    <Link
      className="list-item"
      to={ `/edit/${id}` }
    >
      <div>
        <h3>{ description }</h3>
        <i>{ moment(createdAt).format("Do MMMM YYYY") }</i>
      </div>
      <h3>{ numeral(amount / 100).format('$0,00.00') }</h3>
      {/* <button onClick={ handleRemove }>Remove</button> */}
    </Link>
  );
}

export default connect(null)(ExpenseListItem);
