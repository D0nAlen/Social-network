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
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 777,
                picture: "/IMG/cat4.png",
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}

export default store;