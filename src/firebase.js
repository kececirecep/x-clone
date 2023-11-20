import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCoeD1BitXXuKaXVDle3jLZE5RzDdc2bPo",
    authDomain: "kisiler-ee7f3.firebaseapp.com",
    projectId: "kisiler-ee7f3",
    storageBucket: "kisiler-ee7f3.appspot.com",
    messagingSenderId: "60334707470",
    appId: "1:60334707470:web:2097579b09671967c6fd5f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { db, auth, provider };
