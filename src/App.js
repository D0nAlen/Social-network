import './App.css';
import React from "react";
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
// import Dialogs from './components/Dialogs/Dialogs.jsx';
import Profile from "./components/Profile/Profile.jsx";
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';

const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <div сlass="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer store={props.store} />} />
          <Route path="/profile" element=
            {<Profile
              store={props.store}
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />} />
        </Routes>
      </div>
    </div >
  );
}
export default App;