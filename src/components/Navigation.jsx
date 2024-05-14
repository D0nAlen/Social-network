import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>Profile</div>
      <div className={classes.item}>Messages</div>
      <div className={classes.item}>News</div>
      <div className={classes.item}>Music</div>
      <div className={classes.item}>Settings</div>
    </nav>
  );
};

export default Navigation;
