import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer
    }
})