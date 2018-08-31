import moment from 'moment';

// January 1st 1970 -> Unix Epoch
// timestamp in milliseconds

// Get Visible Espenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    // const createdAt = expense.createdAt;
    const createdAtMoment = moment(expense.createdAt);
    // const startDateMatch = typeof startDate !== 'number' || createdAt >= startDate;
    // const endDateMatch = typeof endDate !== 'number' || createdAt <= endDate;
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((exp1, exp2) => {
    if (sortBy == 'amount') return exp1.amount < exp2.amount;
    else return exp1.createdAt < exp2.createdAt;
  });
}
