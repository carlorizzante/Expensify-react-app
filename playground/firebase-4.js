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

db.ref('expenses').on('value', (snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log("Updated!");
  console.table(expenses);
});

// db.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     console.log(".once .then");
//     console.table(snapshot.val());
//   }).catch(err => console.log(err));

// db.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(".once .then .forEach");
//     console.table(expenses);
//   });

// db.ref('expenses').push({
//   amount: 29500,
//   description: "Some new crazy expense!",
//   note: "",
//   createdAt: 120937120
// });

db.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

db.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});
