import './App.css';
import React from "react";
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";

const App = () => {

  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div сlass="app-wrapper-content">
        <Routes>
          {/* <Route path="/" element={<ProfileContainer />} /> */}
          <Route path="/dialogs" element={<DialogsContainer />} />

          {/* <Route path="/profile/" element={<ProfileContainer />} /> */}
          <Route path="/profile/:userId" element={<ProfileContainer />} />

          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div >
  );
}
export default App;