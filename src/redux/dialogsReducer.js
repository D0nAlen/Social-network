const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initalState = {
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
    newMessageBody: "",
};

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

const dialogsReducer = (state = initalState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body,
            };
        }

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: body }],
                newMessageBody: "",
            };
        }
        default: return state;
    }
}

export default dialogsReducer;