import { getAuthUserData } from "./authReducer.js";

const INITIALIZED_SUCCESS = "INITIALIZED SUCCESS";

let initalState = {
    initialized: null,
};


const appReducer = (state = initalState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default: return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
    let dispatchResult = dispatch(getAuthUserData());
    dispatch(initializedSuccess());
}

export default appReducer;