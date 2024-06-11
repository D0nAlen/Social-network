const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    };
};

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    };
};

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body;
            return state;
        }

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({ id: 5, message: body });
            return state;
        }
        default: return state;
    }
}

export default dialogsReducer;