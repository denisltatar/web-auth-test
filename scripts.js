// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js';
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp ({ 
	apiKey: "AIzaSyBN7nJiKx8LzYJk9HQQYRO7AIwgZU4Ctl8",
	authDomain: "webauthtest-35215.firebaseapp.com",
	projectId: "webauthtest-35215",
	storageBucket: "webauthtest-35215.appspot.com",
	messagingSenderId: "769670300795",
	appId: "1:769670300795:web:7c953d5b7e6ae6267c4ede",
	measurementId: "G-3JWL6Z1CX0"
});

// Initialize Firebase
const auth = getAuth(firebaseConfig);

// NOTE: Make sure there are NO DUPLICATE IDs lmao
const txtSignInEmail = document.getElementById('sign-in-email');
const txtSignInPass = document.getElementById('sign-in-pass');
const txtSignUpEmail = document.getElementById('sign-up-email');
const txtSignUpPass = document.getElementById('sign-up-pass');

// Signing up a user by listening to button click (https://www.youtube.com/watch?v=wkdCpktUfGg)
const btnSignUpSubmit = document.getElementById('btnSignUpSubmit');
btnSignUpSubmit.addEventListener('click', e => {
	// Get email and pass
	// TODO: CHECK FOR REAL EMAIL AND PROPER PASSWORD!!!
	const email = txtSignUpEmail.value;
	const pass = txtSignUpPass.value;

	// Printing our email and password (easier to remember this way)
	console.log(email);
	console.log(pass);

	// Signing Up New Users
	createUserWithEmailAndPassword(auth, email, pass).then((userCredential) => {
		// Signed in 
		console.log(userCredential);
		
		}).catch((error) => {
		console.log("THE FOLLOWING IS A ERROR MESSAGE:");
		console.log(error.code);
		console.log(error.message);
		});
});

// Logging out (after Signing Up) (https://www.youtube.com/watch?v=eS-yU_6aKEE)
const btnSignUpLogOut = document.getElementById('btn-sign-up-logout');
btnSignUpLogOut.addEventListener('click', e => {
	e.preventDefault();
	auth.signOut().then(() => {
		console.log('User Signed Out');
	});
});


// Signing in a user (https://www.youtube.com/watch?v=JWeoQn6KB0o)
const btnSignInSubmit = document.getElementById('btn-sign-in-submit');
btnSignInSubmit.addEventListener('click', e => {
	e.preventDefault();
	// Get user info
	const email = txtSignInEmail.value;
	const pass = txtSignInPass.value;

	signInWithEmailAndPassword(auth, email, pass)
	.then((userCredential) => {
		// Signed in 
		console.log(userCredential.user);
	})
	.catch((error) => {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		if (errorCode === 'auth/wrong-password') {
			alert('Wrong password.');
		} else if (errorCode === 'auth/invalid-email') {
			alert('invalid email.');
		} else {
			console.log(errorMessage);
		}
		console.log(error);
	});
});

// Logging out (after Signing In)
const btnSignInLogOut = document.getElementById('btnSignInLogout');
btnSignInLogOut.addEventListener('click', e => {
	e.preventDefault();
	auth.signOut().then(() => {
		console.log('User Signed Out');
	});
});

// Current state assessment
onAuthStateChanged (auth, user => {
	if (user != null) {
		console.log("Logged in!");
	} else {
		console.log("No user");
	}
});

/*
$(document).ready(function() {
	


	var panelOne = $('.form-panel.two').height(),
	  panelTwo = $('.form-panel.two')[0].scrollHeight;
  
	$('.form-panel.two').not('.form-panel.two.active').on('click', function(e) {
	  e.preventDefault();
  
	  $('.form-toggle').addClass('visible');
	  $('.form-panel.one').addClass('hidden');
	  $('.form-panel.two').addClass('active');
	  $('.form').animate({
		'height': panelTwo
	  }, 200);
	});
  
	$('.form-toggle').on('click', function(e) {
	  e.preventDefault();
	  $(this).removeClass('visible');
	  $('.form-panel.one').removeClass('hidden');
	  $('.form-panel.two').removeClass('active');
	  $('.form').animate({
		'height': panelOne
	  }, 200);
	});
  }); */