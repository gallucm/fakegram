import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    uid: null,
    token: null,
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {

            const user = { ...action.payload };

            state.token = user.token;
            state.uid = user.id;
            state.isLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(user));

        },

        logout: (state) => {
            state.token = null;
            state.uid = null;
            state.isLoggedIn = false;

            localStorage.removeItem('user');
        },

        checkIfLogged: (state, action) => {
            if (action.payload) {
                state.token = action.payload.token;
                state.uid = action.payload.uid;
                state.isLoggedIn = true;
            }
        }
    }
});

export default authSlice.reducer;
export const authActions = authSlice.actions;