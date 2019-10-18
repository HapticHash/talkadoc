import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import loginComp from './components/login/login';
import signupComp from './components/signup/signup';
import dashboard from './components/dashboard/dashboard';

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

const routing = (
    <Router>
        <div id="routing-container">
            <Route path="/login" component={loginComp}></Route>
            <Route path="/signup" component={signupComp}></Route>
            <Route path="/dashboard" component={dashboard}></Route>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
