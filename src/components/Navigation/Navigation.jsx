import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" className={classes.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.activeLink}`}>
        <NavLink to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news">
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music">
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
