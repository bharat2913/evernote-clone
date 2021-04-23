import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import "firebase/firestore";
import reportWebVitals from './reportWebVitals';

// const firebase = require('firebase/app');
// require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyA02Hzqd46yokLG8FmLDpvruYHSEdnKD84",
  authDomain: "evernoteclone-5c135.firebaseapp.com",
  projectId: "evernoteclone-5c135",
  storageBucket: "evernoteclone-5c135.appspot.com",
  messagingSenderId: "431500995602",
  appId: "1:431500995602:web:5fde092299c517d2df3ccb",
  measurementId: "G-5X3JN7FHH6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
