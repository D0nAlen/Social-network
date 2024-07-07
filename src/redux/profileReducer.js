const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
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
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 1024,
                picture: "/IMG/cat6.png",
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        default: return state;
    }
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

export const setUserProfileActionCreator = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    };
};
export default profileReducer;