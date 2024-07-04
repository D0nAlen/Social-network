const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initalState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 7,
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
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        default: return state;
    }
}


export const followActionCreator = (userId) => { return { type: FOLLOW, userId } };
export const unfollowActionCreator = (userId) => { return { type: UNFOLLOW, userId } };
export const setUsersActionCreator = (users) => { return { type: SET_USERS, users, } };
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCountActionCreator = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount });

export default usersReducer;