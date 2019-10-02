import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyDq-AOw-4BZVUW2xV9wavD8hiqXIqCG3Tk",
    authDomain: "talkadoc.firebaseapp.com",
    databaseURL: "https://talkadoc.firebaseio.com",
    projectId: "talkadoc",
    storageBucket: "talkadoc.appspot.com",
    messagingSenderId: "442322325771",
    appId: "1:442322325771:web:1895a4166a88a74044520e",
    measurementId: "G-1KZ40C2YS9"

});

ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
