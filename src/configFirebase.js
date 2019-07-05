import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/messaging';

const config = {
    apiKey: "AIzaSyCukg096Tiy57QzOT2UMg_vFBUfO9j3MXk",
    authDomain: "longe-de-casa.firebaseapp.com",
    databaseURL: "https://longe-de-casa.firebaseio.com",
    projectId: "longe-de-casa",
    storageBucket: "",
    messagingSenderId: "1018631192208",
    appId: "1:1018631192208:web:b3d0e7c050a46d21"
}

firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
let db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default {
  db
}