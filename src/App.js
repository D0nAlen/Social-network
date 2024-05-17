import './App.css';
import React from "react";
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Profile from "./components/Profile/Profile.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div сlass="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<Dialogs/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
          {/* <Dialogs /> */}
        </div>
      </div >
    </BrowserRouter >
  );
}
export default App;
