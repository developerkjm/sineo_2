//////// Initialize Firebase ///////////
// Only replace the part within "initial Firebase".
// var config = {
//     apiKey: "AIzaSyDegEn0QBowj2pzL4vgTRs47b7HSGhSJF8",
//     authDomain: "projectv1-2c008.firebaseapp.com",
//     databaseURL: "https://projectv1-2c008.firebaseio.com",
//     projectId: "projectv1-2c008",
//     storageBucket: "projectv1-2c008.appspot.com",
//     messagingSenderId: "1007456456027"
// };
// firebase.initializeApp(config);
///////// Initialize Firebase //////////////

// Make auth and firestore references
// const auth = firebase.auth();
// const dataBase = firebase.firestore();



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCdhOW5dyO-xyDlNDMS1Sdt0nLwmKMc2_8",
    authDomain: "setest-b5882.firebaseapp.com",
    databaseURL: "https://setest-b5882.firebaseio.com",
    projectId: "setest-b5882",
    storageBucket: "setest-b5882.appspot.com",
    messagingSenderId: "619014912969",
    appId: "1:619014912969:web:4b489cf1989f464c8d0618",
    measurementId: "G-RVTHWGL35P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
