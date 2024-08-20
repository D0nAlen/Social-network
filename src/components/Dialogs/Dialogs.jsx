import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogsItem.jsx";
import { useForm } from "react-hook-form";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = state.messages.map((message) => <Message message={message.message} id={message.id} />);
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>

      <div className={classes.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  );
};

const AddMessageForm = (props) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <textarea {...register("newMessageBody")} value={props.newMessageBody} onChange={props.onNewMessageChange} placeholder="Enter your message"></textarea>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default Dialogs;
