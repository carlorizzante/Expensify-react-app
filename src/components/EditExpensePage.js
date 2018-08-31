import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.js';
import { editExpense, removeExpense } from '../actions/expenses.js';

export class EditExpensePage extends Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  }
  onRemove = (id = this.props.expense.id) => {
    this.props.removeExpense(id);
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
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (id) => dispatch(removeExpense(id))
} );

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
