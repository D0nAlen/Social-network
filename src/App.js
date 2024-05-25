import './App.css';
import React from "react";
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Profile from "./components/Profile/Profile.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let SomeComponent = () => (<Dialogs />);

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div сlass="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage} />} />
            <Route path="/profile" element={<Profile posts={props.state.profilePage} addPost={props.addPost} />} />
          </Routes>
        </div>
      </div >
    </BrowserRouter >
  );
}
export default App;