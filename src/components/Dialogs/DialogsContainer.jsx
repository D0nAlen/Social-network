import Dialogs from "./Dialogs.jsx";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer.js";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect.js";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
