let posts = [
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
    { id: 3, message: "He-he!", likesCount: 44, picture: "/IMG/cat4.png" },
    {
        id: 4,
        message: "Good evening!",
        likesCount: 31,
        picture: "/IMG/cat7.jpg",
    },
];

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

let state = {
    profilePage: {
        posts: posts,
    },

    dialogsPage: {
        messages: messages,
        dialogs: dialogs,
    },

    sidebar: {

    }
}

export default state;