import React from "react";
import classes from "./Navigation.module.css";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={classes.nav}>
      <div  className={classes.item}>
        <NavLink to="/profile" className={location.pathname === "/profile" && classes.activeLink}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" className={location.pathname === "/dialogs" && classes.activeLink}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" className={location.pathname === "/users" && classes.activeLink}>Users</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" className={location.pathname === "/news" && classes.activeLink}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" className={location.pathname === "/music" && classes.activeLink}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" className={location.pathname === "/settings" && classes.activeLink}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
