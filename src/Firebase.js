import firebase from "firebase"

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyAyyUDR6lhxwPpr-_hYmTxwhr_dOvP-hRo",
    authDomain: "fir-b4c71.firebaseapp.com",
    databaseURL: "https://fir-b4c71.firebaseio.com",
    projectId: "fir-b4c71",
    storageBucket: "fir-b4c71.appspot.com",
    messagingSenderId: "671016519657",
    appId: "1:671016519657:web:62df8ce0319ed1ec77ad78",
    measurementId: "G-5390WKLSBZ"
})
const auth = firebase.auth();

export { auth};