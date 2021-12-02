import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    message: null,
    error: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        startLoading: (state) => {
            const oldState = { ...state };

            state.loading = true;
            state.message = oldState.message;
            state.error = oldState.error;
        },

        stopLoading: (state) => {
            const oldState = { ...state };

            state.loading = false;
            state.message = oldState.message;
            state.error = oldState.error;
        },

        setMessage: (state, action) => {
            const oldState = { ...state };

            state.message = action.payload;
            state.loading = oldState.loading;
            state.error = oldState.error;
        },

        setError: (state, action) => {
            const oldState = { ...state };

            state.error = action.payload;
            state.loading = oldState.loading;
            state.message = oldState.message;
        },

        clearMessage: (state) => {
            const oldState = { ...state };

            state.message = null;
            state.loading = oldState.loading;
            state.error = oldState.error;
        },

        clearError: (state) => {
            const oldState = { ...state };

            state.error = null;
            state.loading = oldState.loading;
            state.message = oldState.message;
        }
    }
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;