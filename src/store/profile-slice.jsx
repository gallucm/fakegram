import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: null,
   posts: [],
   postSelected: null,
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

        addPost: (state, action) => {
            state.posts.push(action.payload);
        },

        setPosts: (state, action) => {
            state.posts = action.payload;
        },

        removePosts: (state) => {
            state.posts = [];
        },

        setPostSelected: (state, action) => {
            state.postSelected = action.payload;
        },

        removePostSelected: (state) => {
            state.postSelected = null;
        },

        setComments: (state, action) => {
            state.postSelected.comments = action.payload;
        },

        addComment: (state, action) => {
            state.postSelected.comments.push(action.payload);
        },

        removeComment: (state, action) => {
            state.postSelected.comments = state.postSelected.comments.filter(comment => comment.cid !== action.payload);
        },
    }
});

export default profileSlice.reducer;
export const profileActions = profileSlice.actions;