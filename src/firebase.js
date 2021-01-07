import firebase from "firebase/app";
import "firebase/auth"

const app = firebase.initializeApp({

    apiKey: "AIzaSyBZzs8fqCv1yItkneWetwhdpMFSAin6RFI",
    authDomain: "fir-auth-development-2483d.firebaseapp.com",
    projectId: "fir-auth-development-2483d",
    storageBucket: "fir-auth-development-2483d.appspot.com",
    messagingSenderId: "730406511451",
    appId: "1:730406511451:web:02452c421d56d030e9b07e"


});

const auth = app.auth();
export { auth };
export default app;

