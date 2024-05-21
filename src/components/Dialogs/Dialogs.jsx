import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message.jsx";
import DialogItem from "./DialogItem/DialogsItem.jsx";

// const DialogItem = (props) => {
//   return (
//     <div className={`${classes.dialog} ${classes.active}`}>
//       <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
//     </div>
//   );
// };

// const Message = (props) => {
//   return <div className={classes.message}>{props.message}</div>;
// };

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Lilit" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Alen" },
    { id: 4, name: "Michael" },
  ];

  let dialogs = dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messages = [
    { id: 1, message: "Hello Kitty!!!" },
    { id: 2, message: "Have a nice day!" },
    { id: 3, message: "He-he!" },
    { id: 4, message: "Good evening!" },
  ];

  let messagesElements = messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogs}</div>

      <div className={classes.messages}>
        {messagesElements}
        {/* <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} /> */}
      </div>
    </div>
  );
};

export default Dialogs;
