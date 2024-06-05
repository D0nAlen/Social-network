const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let dialogs = [
    { id: 1, name: "Lilit" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Alen" },
    { id: 4, name: "Michael" },
];

let messages = [
    { id: 1, message: "Hello Kitty!!!" },
    { id: 2, message: "Have a nice day!" },
    { id: 3, message: "He-he!" },
    { id: 4, message: "Good evening!" },
];

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: "Hello Kitty!!!",
                    likesCount: 72,
                    picture: "/IMG/cat1.jpg",
                },
                {
                    id: 2,
                    message: "Have a nice day!",
                    likesCount: 81,
                    picture: "/IMG/cat2.jpg",
                },
                {
                    id: 3,
                    message: "He-he!",
                    likesCount: 44,
                    picture: "/IMG/cat4.png"
                },
                {
                    id: 4,
                    message: "Good evening!",
                    likesCount: 31,
                    picture: "/IMG/cat7.jpg",
                },
            ],

            newPostText: "some boring text...",
        },

        dialogsPage: {
            messages: messages,
            dialogs: dialogs,
            newMessageBody: "",
        },

        sidebar: {

        }
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("State is changed");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 777,
                picture: "/IMG/cat4.png",
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messages.push({ id: 5, message: body });
            this._callSubscriber(this._state);
        }
    },
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
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


export default store;