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

const notes = [
  {
    id: 1,
    text: "Donec sed odio dui."
  }, {
    id: 2,
    text: "Donec id elit non mi porta gravida at eget metus."
  }
];

const notes_as_obj = {
  'id_1': {
    title: "Donec sed odio dui.",
    text: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
  },
  'id_2': {
    title: "Ligula Elit Commodo",
    text: "Nullam id dolor id nibh ultricies vehicula ut id elit."
  }
}

db.ref('notes')
  .set(notes_as_obj)
  .then(() => console.log("Success!"))
  .catch(err => console.log(err));

db.ref('notes')
  .push({
    title: "Commodo Inceptos Vestibulum Ridiculus",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  })
