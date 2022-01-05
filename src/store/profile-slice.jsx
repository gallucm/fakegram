import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: null,
   posts: []
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

        removeUser: (state) => {
            state.user = null;
        },

        setPosts: (state, action) => {
            state.posts = action.payload;
        },

        setPost: (state, action) => {
            state.posts.push(action.payload);
        }
    }
});

export default profileSlice.reducer;
export const profileActions = profileSlice.actions;