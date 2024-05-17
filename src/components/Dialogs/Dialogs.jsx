import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={`${classes.dialog} ${classes.active}`}>Lilit</div>
        <div className={classes.dialog}>Jane</div>
        <div className={classes.dialog}>Alen</div>
      </div>

      <div className={classes.messages}>
        <div className={classes.message}>Hello Kitty!!</div>
        <div className={classes.message}>Have a nice day!</div>
        <div className={classes.message}>He-he! ^-^</div>
      </div>
    </div>
  );
};

export default Dialogs;
