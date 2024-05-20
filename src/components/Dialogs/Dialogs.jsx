import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={`${classes.dialog} ${classes.active}`}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogData = [
    { id: 1, name: "Lilit" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Alen" },
    { id: 4, name: "Michael" },
  ];

  let messagesData = [
    { id: 1, message: "Hello Kitty!!!" },
    { id: 2, message: "Have a nice day!" },
    { id: 3, message: "He-he!" },
    { id: 4, message: "Good evening!" },
  ];

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
        <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
        <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
        <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
      </div>

      <div className={classes.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
};

export default Dialogs;
