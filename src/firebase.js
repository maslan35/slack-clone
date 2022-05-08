import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRIHWLHyYRTvzzsyjvEQjxl9U3ITszXAk",
    authDomain: "slack-clone-c9d67.firebaseapp.com",
    projectId: "slack-clone-c9d67",
    storageBucket: "slack-clone-c9d67.appspot.com",
    messagingSenderId: "743200611979",
    appId: "1:743200611979:web:19b25c400718ec1ee4fe8e",
    measurementId: "G-DR5VY3P7DS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };