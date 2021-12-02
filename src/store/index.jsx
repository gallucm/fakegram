import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import uiReducer from "./ui-slice";
import profileReduer from "./profile-slice";

const store = configureStore({
    reducer: {auth: authReducer, ui: uiReducer, profile: profileReduer},
});

export default store;