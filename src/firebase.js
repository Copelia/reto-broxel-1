
import firebase from 'firebase';

let config = {
  apiKey: "AIzaSyB5L3Ce4MAZ2L8bZCsPUU406RX3NJXiNjw",
  authDomain: "broxel-5b301.firebaseapp.com",
  databaseURL: "https://broxel-5b301.firebaseio.com",
  projectId: "broxel-5b301",
  storageBucket: "broxel-5b301.appspot.com",
  messagingSenderId: "640424790262"
};

firebase.initializeApp(config);
export default firebase;
