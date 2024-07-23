import './App.css';
import React from "react";
import Navigation from './components/Navigation/Navigation.jsx';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import HeaderContainer from './components/Header/HeaderContainer.jsx';

const App = () => {

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navigation />
      <div сlass="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div >
  );
}
export default App;