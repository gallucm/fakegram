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

        removePost: (state, action) => {
            state.posts = state.posts.filter(post => post.pid !== action.payload);
        },

        setPostSelected: (state, action) => {
            state.postSelected = action.payload;
        },

        removePostSelected: (state) => {
            state.postSelected = null;
        },

        addComment: (state, action) => {

            if (!state.postSelected.comments) {
                state.postSelected.comments = [];
            } else {
                state.postSelected.comments = [...state.postSelected.comments, action.payload];
            }

            state.posts = state.posts.map(post => post.pid === state.postSelected.pid ? state.postSelected : post);
        },
    }
});

export default profileSlice.reducer;
export const profileActions = profileSlice.actions;