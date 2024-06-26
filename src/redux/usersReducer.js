const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initalState = {
    users: [],
};

const usersReducer = (state = initalState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId)
                        return { ...user, followed: true };
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId)
                        return { ...user, followed: false };
                    return user;
                })
            }
        }
        case SET_USERS: {
            // return { ...state, users: [...state.users, ...action.users] }
            return { ...state, users: action.users }

        }
        default: return state;
    }
}


export const followActionCreator = (userId) => { return { type: FOLLOW, userId } };
export const unfollowActionCreator = (userId) => { return { type: UNFOLLOW, userId } };
export const setUsersActionCreator = (users) => { return { type: SET_USERS, users, } };

export default usersReducer;