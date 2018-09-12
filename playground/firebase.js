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

db.ref().set(null);

db.ref().set({
  users: {
    u1: {
      first: "Jon",
      last: "Snow",
      loc: "The Wall",
      isSingle: true
    },
    u2: {
      first: "Aria",
      last: "Stark",
      loc: "Winterfell",
      isSingle: false
    },
    u3: {
      first: "Sansa",
      isHappy: "Not so much",
      location: {
        loc: "Somewhere",
        Altitude: 3000
      }
    }
  }
}).catch(err => console.log(err));

// const onValueChange = db.ref('users').on('value', (snapshot) => {
//   console.log(snapshot.val());
// });

const onValueChange = db.ref('users/u3').on('value', (snapshot) => {
  const { first, location: { loc } } = snapshot.val();
  console.log(`${first} moved to ${loc}.`);
}, (err) => console.log(err));

// db.ref('users/u3/location/loc').off('value', onValueChange);
// db.ref().off('value', onValueChange);

// setTimeout(() => {
//   db.ref('users/u1/isSingle').remove();
// }, 3000);
//
// setTimeout(() => {
//   db.ref('users/u2/isSingle').set(null);
// }, 5000);

setTimeout(() => {
  db.ref('users/u3').update({
    'location/loc': "High Castle"
  });
}, 3000);

// db.ref('users/u3')
//   .once('value')
//   .then(snapshot => console.log(snapshot.val()))
//   .catch(err => console.log(err));

// setTimeout(() => {
//   db.ref('users/u3')
//     .once('value')
//     .then(snapshot => {
//       const { first, location } = snapshot.val();
//       console.log(`${first} is at ${location.loc}.`);
//     })
//     .catch(err => console.log(err));
// }, 3100);
