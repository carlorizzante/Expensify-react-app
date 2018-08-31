import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import { removeExpense } from '../actions/expenses.js';

const now = moment();
// console.log(now.format('dddd, MMM Do YYYY'));

const Message = (props) => (
  <div className={ props.className }>
    { props.message }
  </div>
);

export class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    const { id, description, note, amount, createdAt } = props.expense || {}; // destruct from expense or empty object
    this.state = {
      // use what's found otherwise default to empty string
      id,
      description: description || '',
      note: note || '',
      amount: amount ? (amount / 100).toString() : '',
      createdAt: createdAt ? moment(createdAt) : moment(),
      calendarFocused: false,
      showErrorMsg: false
    }
  }
  handleDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState(_ => ({ description }));
  }
  handleAmountChange = (event) => {
    const amount = event.target.value;
    // if (amount.match(/^\d*(\.\d{0,2})?$/)) this.setState({ amount });
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) this.setState({ amount });
  }
  handleDateChange = (createdAt) => {
    if (createdAt) this.setState(_ => ({ createdAt }));
  }
  handleCalendarFocusChange = ({ focused }) => {
    this.setState(_ => ({ calendarFocused: focused }));
  }
  handleNoteChange = (event) => {
    const note = event.target.value;
    this.setState(_ => ({ note }));
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(_ => ({ showErrorMsg: true }));
    } else {
      this.setState(_ => ({ showErrorMsg: false }));
      // console.log("Saving...");
      const { id, description, note, amount, createdAt } = this.state;
      this.props.onSubmit({
        id,
        description,
        note,
        amount: parseFloat(amount) * 100,
        createdAt: createdAt.valueOf()
      });
    }
  }
  handleRemoveExpense = (event) => {
    event.preventDefault();
    this.props.onRemove(this.state.id);
  }
  render() {
    return (
      <form onSubmit={ this.handleFormSubmit }>
        { this.state.showErrorMsg
          && <Message
            className="message message--error"
            message={ <p>Please provide <strong>description</strong> and <strong>amount</strong>.</p> }
          />
        }
        <input
          type="text"
          autoFocus
          value={ this.state.description }
          placeholder="Expense description..."
          onChange={ this.handleDescriptionChange }
        />
        <input
          type="text"
          value={ this.state.amount }
          placeholder="Amount"
          onChange={ this.handleAmountChange }
        />
        <SingleDatePicker
          date={ this.state.createdAt }
          onDateChange={ this.handleDateChange }
          focused={ this.state.calendarFocused }
          onFocusChange={ this.handleCalendarFocusChange }
          numberOfMonths={ 1 }
          isOutsideRange={ (day) => false }
        />
        <textarea
          value={ this.state.note }
          placeholder="You can also write a bunch of notes..."
          onChange={ this.handleNoteChange }
        />
        <button type="submit">Save</button>
        { this.state.id && <button onClick={ this.handleRemoveExpense }>Remove</button> }
      </form>
    );
  }
}

export default connect(null)(ExpenseForm);
