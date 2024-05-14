import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      Cat social network ≽ܫ≼
      <img src={"/IMG/cat5.png"} />
    </header>
  );
};

export default Header;
