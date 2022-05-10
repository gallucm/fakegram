import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uid: null,
    token: null,
    isLoggedIn: false,
    data: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            const user = { ...action.payload };
            
            state.token = user.token;
            state.uid = user.uid;
            state.isLoggedIn = true;
            state.data = user.userData;
        },

        updateUserImage: (state, action) => {
            state.data.imageProfile = action.payload;
        },

        updateUserProfile: (state, action) => {
            state.data = { ...state.data, ...action.payload };
        },

        logout: (state) => {
            state.token = null;
            state.uid = null;
            state.data = null;
            state.isLoggedIn = false;
        },

        checkIfLogged: (state, action) => {
            if (action.payload) {
                state.token = action.payload.token;
                state.uid = action.payload.uid;
                state.data = action.payload.userData;
                state.isLoggedIn = true;
            }
        }
    }
});

export default authSlice.reducer;
export const authActions = authSlice.actions;