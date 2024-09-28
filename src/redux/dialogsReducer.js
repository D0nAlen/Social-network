const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    messages: [
        { id: 1, message: "Hello Kitty!!!" },
        { id: 2, message: "Have a nice day!" },
        { id: 3, message: "He-he!" },
        { id: 4, message: "Good evening!" }
    ],
    dialogs: [
        { id: 1, name: "Lilit" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Alen" },
        { id: 4, name: "Michael" },
    ],
};

export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    };
};

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    };
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body,
            };
        }

        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: body }],
            };
        }
        default: return state;
    }
}

export default dialogsReducer;