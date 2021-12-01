import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
            state.isLoggedIn = true;
        },

        logout: (state) => {
            state.token = null;
            state.isLoggedIn = false;

            localStorage.removeItem('user');
        },

        checkIfLoggedIn: (state) => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.token) {
                state.token = user.token;
                state.isLoggedIn = true;
            }
        }
    }
});

export default authSlice.reducer;
export const authActions = authSlice.actions;