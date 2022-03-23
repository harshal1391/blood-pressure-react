import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdZiKH1Jnmj1mkD6nWYGb3P4k4DwHDl2c",
  authDomain: "blood-presssure.firebaseapp.com",
  databaseURL: "https://blood-presssure-default-rtdb.firebaseio.com",
  projectId: "blood-presssure",
  storageBucket: "blood-presssure.appspot.com",
  messagingSenderId: "634439643295",
  appId: "1:634439643295:web:90cfa17c1ce1305355b2aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
