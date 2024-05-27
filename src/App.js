import './App.css';
import React from "react";
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Profile from "./components/Profile/Profile.jsx";
import { Route, Routes } from 'react-router-dom';

const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div сlass="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage} />} />
          <Route path="/profile" element={<Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
          />} />
        </Routes>
      </div>
    </div >
  );
}
export default App;