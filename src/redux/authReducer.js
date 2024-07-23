const SET_USER_DATA = "SET USER DATA";


let initalState = {
    userId: 2,
    email: "blabla@bla.bla",
    login: "samurai",
    isAuth: true,
};

const authReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        default: return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export default authReducer;