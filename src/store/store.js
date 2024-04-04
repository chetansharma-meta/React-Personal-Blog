import {
    configureStore
} from "@reduxjs/toolkit";
import AuthReducers from "./authSlice";

const store = configureStore({
    reducer: AuthReducers,
});

export default store;