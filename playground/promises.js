const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Got it!'), 0);
});

console.log('Before');
promise
  .then(data => {
    console.log(data);
    return 'Some text...';
  })
  .then(str => console.log(str))
  .catch(err => console.log(err));
console.log('After');
