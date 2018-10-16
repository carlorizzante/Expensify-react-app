import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters.js';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  handleTextChange = (event) => this.props.setTextFilter(event.target.value);
  handleSortChange = (event) => {
    const value = event.target.value;
    if (value == 'amount') this.props.sortByAmount();
    if (value == 'date') this.props.sortByDate();
  }
  handleDateChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  handleFocusChange = (calendarFocused) => this.setState({ calendarFocused });
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              value={ this.props.filters.text }
              onChange={ this.handleTextChange }
              placeholder="Search expenses..."
            />
          </div>
          <div className="input-group__item">
            <select
              value={ this.props.filters.sortBy }
              onChange={ this.handleSortChange }
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={ this.props.filters.startDate }
              startDateId={ "start" }
              endDate={ this.props.filters.endDate }
              endDateId={ "end" }
              onDatesChange={ this.handleDateChange }
              focusedInput={ this.state.calendarFocused }
              onFocusChange={ this.handleFocusChange }
              numberOfMonths={ 1 }
              isOutsideRange={ () => false }
              showClearDates={ true }
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state => ({
  filters: state.filters
}));

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByAmount:  () => dispatch(sortByAmount()),
  sortByDate:    () => dispatch(sortByDate()),
  setStartDate:  (startDate) => dispatch(setStartDate(startDate)),
  setEndDate:    (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
