import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDcUOWrz8zXI2asXMHMvUs-hZ5W-yc0Ivo",
    authDomain: "instagram-clone-a2099.firebaseapp.com",
    databaseURL: "https://instagram-clone-a2099.firebaseio.com",
    projectId: "instagram-clone-a2099",
    storageBucket: "instagram-clone-a2099.appspot.com",
    messagingSenderId: "688474273343",
    appId: "1:688474273343:web:9f481605eb01610a4eaa8a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;