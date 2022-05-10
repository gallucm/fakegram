import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    message: null,
    reset: false,
    error: null,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        setLoading: (state, action) => {
            const oldState = { ...state };
            state.message = oldState.message;
            state.error = oldState.error;

            state.loading = action.payload;
        },

        setMessage: (state, action) => {
            const oldState = { ...state };
            state.loading = oldState.loading;
            state.error = oldState.error;

            state.message = action.payload;
        },

        setError: (state, action) => {
            const oldState = { ...state };
            state.loading = oldState.loading;
            state.message = oldState.message;

            state.error = action.payload;
        },

        reset: (state) => {
            const oldState = { ...state };

            state.loading = oldState.loading;
            state.message = oldState.message;
            state.error = oldState.error;
            state.reset = !state.reset;
        },

        resetAll: (state) => {
            state.reset = false;
            state.message = null;
            state.error = null;
        }
    }
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;