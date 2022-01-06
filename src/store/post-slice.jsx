import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   comments: []
}

const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        setComments: (state, action) => {
            state.comments = action.payload;
        },
        
        addComment: (state, action) => {
            state.comments.push(action.payload);
        },

        removeComment: (state, action) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        },
    }
});

export default postSlice.reducer;
export const postActions = postSlice.actions;