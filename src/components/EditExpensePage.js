import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.js';
import {
  // editExpense,
  startEditExpense,
  // removeExpense,
  startRemoveExpense
} from '../actions/expenses.js';

export class EditExpensePage extends Component {
  onSubmit = (expense) => {
    // this.props.editExpense(this.props.expense.id, expense);
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  }
  onRemove = (id = this.props.expense.id) => {
    // this.props.removeExpense(id);
    this.props.startRemoveExpense(id);
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h1>Edit Expense</h1>
        <ExpenseForm
          expense={ this.props.expense }
          onSubmit={ this.onSubmit }
          onRemove={ this.onRemove }
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;
  return {
    expense: state.expenses.find(expense => expense.id == id)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  // editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  // removeExpense: (id) => dispatch(removeExpense(id)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
} );

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
