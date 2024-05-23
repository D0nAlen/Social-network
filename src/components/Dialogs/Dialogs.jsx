import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogsItem.jsx";

const Dialogs = (props) => {
  let dialogsElements = props.state.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
    // <DialogItem name={dialog.name} key={dialog.id} />
  ));

  let messagesElements = props.messages.map((message) => (
    <Message message={message.message} id={message.id} />
    // <Message message={message.message} key={message.id}/>
  ));
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>

      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
