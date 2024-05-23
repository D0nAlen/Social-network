import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state.js";

// let posts = [
//   {
//     id: 1,
//     message: "Hello Kitty!!!",
//     likesCount: 72,
//     picture: "/IMG/cat1.jpg",
//   },
//   {
//     id: 2,
//     message: "Have a nice day!",
//     likesCount: 81,
//     picture: "/IMG/cat2.jpg",
//   },
//   { id: 3, message: "He-he!", likesCount: 44, picture: "/IMG/cat4.png" },
//   {
//     id: 4,
//     message: "Good evening!",
//     likesCount: 31,
//     picture: "/IMG/cat7.jpg",
//   },
// ];

// let dialogs = [
//   { id: 1, name: "Lilit" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Alen" },
//   { id: 4, name: "Michael" },
// ];

// let messages = [
//   { id: 1, message: "Hello Kitty!!!" },
//   { id: 2, message: "Have a nice day!" },
//   { id: 3, message: "He-he!" },
//   { id: 4, message: "Good evening!" },
// ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
