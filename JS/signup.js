import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

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
const database = database()

function register () {
    email = document.getElementById("email").value 
    passwords = document.getElementById("password").value

    if(validate_email(email) == false || validate_password(passwords) == false) {
        alert('Email or Password is Incorrect')
        return
    }

    // Auth
    createUserWithEmailAndPassword(email, passwords)
    .then(function() {
        // User Variable
        var user = auth.currentUser

        // Add User to Firebase Database
        var database_ref = database.ref()

        // Create User Data
        var user_data = {
            email : email,
            last_login : Date.now()
        }

        // Push to Firebase Database
        database_ref.child('users/' + user.uid).set(user_data)
        alert('User Created!')
    })
}

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email) == true) {
        return true
    } else {
        return false
    }
}

function validate_password(passwords){
    if(passwords < 6) {
        return false
    } else {
        return true
    }
}

