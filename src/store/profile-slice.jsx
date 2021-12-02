import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: null,
   posts: []
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        loadUser: (state, action) => {
            state.user = action.payload;
        },

        removeUser: (state) => {
            state.user = null;
        },

        loadPosts: (state, action) => {
            state.posts = action.payload;
        }
    }
});

export default profileSlice.reducer;
export const profileActions = profileSlice.actions;