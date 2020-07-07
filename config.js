import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
   apiKey: "AIzaSyAGHvFZCSOjkAxE0q3uoTWm_5X9Ld3nDu0",
   authDomain: "book-centre.firebaseapp.com",
   databaseURL: "https://book-centre.firebaseio.com",
   projectId: "book-centre",
   storageBucket: "book-centre.appspot.com",
   messagingSenderId: "382816443505",
   appId: "1:382816443505:web:87edd18f059560e047cfd0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();