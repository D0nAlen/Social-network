import { authAPI } from "../api/api.js";

const SET_USER_DATA = "SET USER DATA";
const STOP_SUBMIT = 'STOP_SUBMIT';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: null,
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case STOP_SUBMIT: {
            return {
                ...state,
                errorMessage: action.message,
            }
        }
        default: return state;
    }
}

export const stopSubmit = (message) => ({ type: STOP_SUBMIT, message });

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: { userId, email, login, isAuth }
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit(message));
    }
}

export const logout = () => async (dispatch) => {
    let response = authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;