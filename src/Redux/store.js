import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from "./sidebarSlice";
import addReducer from "./addSlice";

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        add: addReducer,
    },
})