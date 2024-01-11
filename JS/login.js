import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAN4vcQgOG3k59RJSxaxF_alx2ptm0jlW0",
    authDomain: "darya-c1cc4.firebaseapp.com",
    projectId: "darya-c1cc4",
    storageBucket: "darya-c1cc4.appspot.com",
    messagingSenderId: "1058538595166",
    appId: "1:1058538595166:web:7b87766988889a430c65cf",
    measurementId: "G-ZJGGVK82X9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

// Object HTML
var email = document.getElementById("email")
var passwords = document.getElementById("password")

window.login = function(e){
    e.preventDefault();
    var obj = {
        email:email.value,
        passwords:passwords.value
    };
    signInWithEmailAndPassword(auth, obj.email, obj.passwords)
    
    .then(function(sucess){
        console.log(user.uid)
        alert("Login Successful")
    })
    // .catch(function(err){
    //     window.location.replace
    //     alert("Login Failed" + err)
    // })
    console.log(obj)
}