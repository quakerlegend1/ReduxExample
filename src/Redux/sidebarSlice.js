import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
       increment: (state) => {
        state.value += 1
       },
       decrement: (state) => {
        state.value -= 1
       },
       resetCount: (state) => {
        state.value = 0
       },
    }
})

export const {increment, decrement, resetCount} = sidebarSlice.actions
export default sidebarSlice.reducer
