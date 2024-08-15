import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogsItem.jsx";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

  let messagesElements = state.messages.map((message) => <Message message={message.message} id={message.id} />);

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>

      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
