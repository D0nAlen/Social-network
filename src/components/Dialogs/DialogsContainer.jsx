import Dialogs from "./Dialogs.jsx";
import { sendMessageCreator } from "../../redux/dialogsReducer.js";
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
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    }
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
