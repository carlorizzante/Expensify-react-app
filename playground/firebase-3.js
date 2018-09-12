// import * as firebase from 'firebase';

import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBFbwadkOMHMLp_Yp5x5Ho8CkA6c-UjhT0",
  authDomain: "expensify-react-app-2018.firebaseapp.com",
  databaseURL: "https://expensify-react-app-2018.firebaseio.com",
  projectId: "expensify-react-app-2018",
  storageBucket: "expensify-react-app-2018.appspot.com",
  messagingSenderId: "8333746653"
};

firebase.initializeApp(config);

const db = firebase.database();

db.ref('expenses').set(null);

db.ref('expenses').on('value', (snapshot) => {
  const val = snapshot.val();
  console.log("Updated!");
  console.log(val);
});

const expenses = {
  'id_1': {
    amount: 12095,
    description: "Nullam quis risus eget urna mollis ornare vel eu leo.",
    note: "",
    createdAt: 0
  },
  'id_2': {
    amount: 9500,
    description: "Sed posuere consectetur est at lobortis.",
    note: "",
    createdAt: 100
  },
  'id_3': {
    amount: 35625,
    description: "Etiam porta sem malesuada magna mollis euismod.",
    note: "",
    createdAt: -100
  }
};

setTimeout(() => {
  db.ref('expenses')
    .set(expenses)
    .then(() => console.log("Success!"))
    .catch(err => console.log(err));
}, 3000);

db.ref('expenses/' + 'id_95')
  .set({
    amount: 10000,
    description: "Pushed expense",
    note: "",
    createdAt: 1000000
  })
  .then(() => console.log("Success!"))
  .catch(err => console.log(err));

// db.ref('expenses').once('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// });
