import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses.js';

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  const handleRemove = _ => dispatch(removeExpense(id));
  return (
    <li className="list__item">
      <h3><Link to={ `/edit/${id}` }>{ description }</Link></h3>
      <p>{ amount } - <i>{ createdAt }</i></p>
      <button onClick={ handleRemove }>Remove</button>
      <Link to={ `/edit/${id}` }>Edit</Link>
    </li>
  );
}

export default connect(null)(ExpenseListItem);
