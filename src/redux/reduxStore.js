import { combineReducers } from "redux";
import profileReducer from "./profileReducer.js";
import dialogsReducer from "./dialogsReducer.js";
import sidebarReducer from "./sidebarReducer.js";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersReducer.js";
import authReducer from "./authReducer.js";
import { thunk } from "redux-thunk";
import appReducer from "./appReducer.js";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});

let store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
