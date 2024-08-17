import { usersAPI } from "../api/api.js";
import { profileAPI } from "../api/api.js";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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
            return { ...state, newPostText: action.newText, };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile, };
        }
        case SET_STATUS: {
            return { ...state, status: action.status, };
        }
        default: return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });

export const setStatus = (status) => ({ type: SET_STATUS, status: status });

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((response) => {
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0)
                dispatch(setStatus(status));
        });
    }
}


export default profileReducer;