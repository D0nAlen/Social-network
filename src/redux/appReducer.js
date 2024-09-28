import { getAuthUserData } from "./authReducer.js";

const INITIALISED_SUCCESS = "INITIALISED SUCCESS";

let initialState = {
    initialised: null,
};


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALISED_SUCCESS: {
            return {
                ...state,
                initialised: true,
            }
        }
        default: return state;
    }
}

export const initialisedSuccess = () => ({ type: INITIALISED_SUCCESS });

export const initialiseApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initialisedSuccess());
    });
}

export default appReducer;