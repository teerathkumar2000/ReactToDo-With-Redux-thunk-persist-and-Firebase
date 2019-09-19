import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyD0YzI6Rmec2KWSWtYwWJtBBE529I-TcHE",
  authDomain: "todo-with-redux-47dbe.firebaseapp.com",
  databaseURL: "https://todo-with-redux-47dbe.firebaseio.com",
  projectId: "todo-with-redux-47dbe",
  storageBucket: "todo-with-redux-47dbe.appspot.com",
  messagingSenderId: "449363988285",
  appId: "1:449363988285:web:c0e8952c22e98687227f54"
};

export default firebase.initializeApp(firebaseConfig) 