import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDt-_Qc5tBUcCbkI7rrw_FTK-4wQVYEPrg",
    authDomain: "clone-e8dc2.firebaseapp.com",
    databaseURL: "https://clone-e8dc2.firebaseio.com",
    projectId: "clone-e8dc2",
    storageBucket: "clone-e8dc2.appspot.com",
    messagingSenderId: "603047080019",
    appId: "1:603047080019:web:3551f523f77c3518fa96a6",
    measurementId: "G-DNCCFWKFJ9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth };