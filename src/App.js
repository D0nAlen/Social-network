import './App.css';
import React from "react";
import Navigation from './components/Navigation/Navigation.jsx';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import LoginPage from './components/Login/Login.jsx';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { initializeApp } from './redux/appReducer.js';
import Preloader from './components/common/Preloader/Preloader.js';

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  });

  if (!props.initialized)
    return <Preloader />;

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navigation />
        <div сlass="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/profile/" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div >
    );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
