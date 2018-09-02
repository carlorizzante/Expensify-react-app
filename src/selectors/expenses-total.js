export default (expenses) => expenses
  .map(exp => exp.amount)
  .reduce((total, amount) => total + amount, 0);
