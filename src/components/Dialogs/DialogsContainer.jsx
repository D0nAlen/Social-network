import React from "react";
import Dialogs from "./Dialogs.jsx";
import sendMessageCreator from "../../redux/dialogsReducer.js";
import updateNewMessageBodyCreator from "../../redux/dialogsReducer.js";
import StoreContext from "../../StoreContext.js";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
  
        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
