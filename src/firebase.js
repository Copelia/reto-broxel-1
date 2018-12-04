import firebase from 'firebase';
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCXTCY2Un6a3QUfVGqSizsuTQFhIJm7dp4",
    authDomain: "fir-810f6.firebaseapp.com",
    databaseURL: "https://fir-810f6.firebaseio.com",
    projectId: "fir-810f6",
    storageBucket: "fir-810f6.appspot.com",
    messagingSenderId: "138713770195"
  };
  const reactFirebase = firebase.initializeApp(config);

  export {reactFirebase}






