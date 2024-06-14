// import profileReducer from "./profileReducer.js";
// import dialogsReducer from "./dialogsReducer.js";
// import sidebarReducer from "./sidebarReducer.js";

// let dialogs = [
//     { id: 1, name: "Lilit" },
//     { id: 2, name: "Jane" },
//     { id: 3, name: "Alen" },
//     { id: 4, name: "Michael" },
// ];

// let messages = [
//     { id: 1, message: "Hello Kitty!!!" },
//     { id: 2, message: "Have a nice day!" },
//     { id: 3, message: "He-he!" },
//     { id: 4, message: "Good evening!" },
// ];

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {
//                     id: 1,
//                     message: "Hello Kitty!!!",
//                     likesCount: 72,
//                     picture: "/IMG/cat1.jpg",
//                 },
//                 {
//                     id: 2,
//                     message: "Have a nice day!",
//                     likesCount: 81,
//                     picture: "/IMG/cat2.jpg",
//                 },
//                 {
//                     id: 3,
//                     message: "He-he!",
//                     likesCount: 44,
//                     picture: "/IMG/cat4.png"
//                 },
//                 {
//                     id: 4,
//                     message: "Good evening!",
//                     likesCount: 31,
//                     picture: "/IMG/cat7.jpg",
//                 },
//             ],

//             newPostText: "some boring text...",
//         },

//         dialogsPage: {
//             messages: messages,
//             dialogs: dialogs,
//             newMessageBody: "",
//         },

//         sidebar: {

//         }
//     },
    
//     getState() {
//         return this._state;
//     },

//     _callSubscriber() {
//         console.log("State is changed");
//     },
    
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//         this._callSubscriber(this._state);
//     },
// }

// export default store;