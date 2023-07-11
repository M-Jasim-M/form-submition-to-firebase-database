
const firebaseConfig = {
    apiKey: "AIzaSyA6McPQUi-PkEr2WsEr8VliSY0vy2-8fUc",
    authDomain: "fulldata-7c37d.firebaseapp.com",
    projectId: "fulldata-7c37d",
    storageBucket: "fulldata-7c37d.appspot.com",
    messagingSenderId: "127903164275",
    appId: "1:127903164275:web:dca9e01c35b16df4c34706"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();