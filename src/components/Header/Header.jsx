import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      Cat social network ≽ܫ≼
      <img src={"/IMG/cat5.png"} />
      <div className={classes.loginBlock}>{props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}</div>
    </header>
  );
};

export default Header;
