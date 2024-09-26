import profileReducer from "./profileReducer.js";
import { addPostActionCreator } from "./profileReducer.js";

it('new post should be added', () => {
    let action = addPostActionCreator("testing");
    let state = {
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
    };
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);

});