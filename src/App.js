import './App.css';
import React from "react";
import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import Profile from './components/Profile.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <Profile />
    </div>
  );
}
export default App;
