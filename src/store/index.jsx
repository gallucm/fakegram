import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';


import authReducer from "./auth-slice";
import uiReducer from "./ui-slice";
import profileReduer from "./profile-slice";
import postReducer from "./post-slice";

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
});

const store = configureStore({
    reducer: {auth: authReducer, ui: uiReducer, profile: profileReduer, post: postReducer},
    middleware: customizedMiddleware
});

export default store;