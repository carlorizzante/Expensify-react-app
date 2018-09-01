import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import { removeExpense } from '../actions/expenses.js';

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => {
  const handleRemove = _ => dispatch(removeExpense(id));
  return (
    <li className="list__item">
      <h3><Link to={ `/edit/${id}` }>{ description }</Link></h3>
      <p>
        { numeral(amount / 100).format('$0,00.00') }
         <span> - </span>
        <i>
          { moment(createdAt).format("Do MMMM YYYY") }
        </i>
      </p>
      <button onClick={ handleRemove }>Remove</button>
      <Link to={ `/edit/${id}` }>Edit</Link>
    </li>
  );
}

export default connect(null)(ExpenseListItem);
