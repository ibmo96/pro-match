import firebase from "firebase";  

const firebaseConfig = {
    apiKey: "AIzaSyCC0e2ZG3zeix-2UR5KOhHukfuZypA8X0k",
    authDomain: "pro-match-85cda.firebaseapp.com",
    databaseURL: "https://pro-match-85cda.firebaseio.com",
    projectId: "pro-match-85cda",
    storageBucket: "pro-match-85cda.appspot.com",
    messagingSenderId: "620448288776",
    appId: "1:620448288776:web:a1770515c7c859012ac1bd",
    measurementId: "G-NN8Q3975P5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 
  const database = firebaseApp.firestore(); //realtime database
  firebase.analytics(); 

  //const storage = firebase.storage(); //stores the images 


  export const auth = firebaseApp.auth(); //authentication instance 
  export  default database; 
  //export const storage = firebase.storage();