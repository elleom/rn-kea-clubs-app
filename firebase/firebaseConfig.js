import  firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAk9rlZD8W5GeYS-8HAK1sEIlJksLfPALg",
  authDomain: "cbsreactnativeapp.firebaseapp.com",
  databaseURL: "https://cbsreactnativeapp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cbsreactnativeapp",
  storageBucket: "cbsreactnativeapp.appspot.com",
  messagingSenderId: "672065005636",
  appId: "1:672065005636:web:e88d61210ce65050a1f411",
  measurementId: ""
};

try {
  if (!firebase.apps.length) {
    
    firebase.initializeApp(firebaseConfig);
    
  }
} catch(error) {
  console.log(error)
}


export { firebase };

