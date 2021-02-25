import  firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyDUMxDa2LHFeGiN7M_RDIiGHjbuyIMXFxU",
    authDomain: "crud-operation-ad229.firebaseapp.com",
    databaseURL: "https://crud-operation-ad229-default-rtdb.firebaseio.com",
    projectId: "crud-operation-ad229",
    storageBucket: "crud-operation-ad229.appspot.com",
    messagingSenderId: "1062385422604",
    appId: "1:1062385422604:web:3741bf3829ac2da2ecf929"
  };
  // Initialize Firebase
  var firebaseDb=firebase.initializeApp(firebaseConfig);


  export default firebaseDb.database().ref();