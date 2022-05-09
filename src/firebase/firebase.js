import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIwN68wRDFBl42DbCGfxN6o1X2peD5J40",
    authDomain: "blog-edc7e.firebaseapp.com",
    projectId: "blog-edc7e",
    storageBucket: "blog-edc7e.appspot.com",
    messagingSenderId: "382220246368",
    appId: "1:382220246368:web:37dc4bd0f8e41a840e1205"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimeStamp;

  export {timestamp};
  export default firebaseApp.firestore();