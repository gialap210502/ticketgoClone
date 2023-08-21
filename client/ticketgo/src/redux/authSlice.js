import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        getList: {
            current: null,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        getListStart: (state) => {
            state.getList.isFetching = true;
        },
        getListSuccess: (state, action) => {
            state.getList.isFetching = false;
            state.getList.current = action.payload;
            state.getList.error = false;
        },
        getListFailed: (state) => {
            state.getList.isFetching = false;
            state.getList.error = true;
        }
    }
})

export const {
    getListStart,
    getListFailed,
    getListSuccess
} = authSlice.actions;

export default authSlice.reducer;