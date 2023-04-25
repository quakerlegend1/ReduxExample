import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const addSlice = createSlice({
    name: "add",
    initialState,
    reducers: {
        addReduxItem: (state) => {
            state.value.push(1)
        },
        resetArray: (state)=> {
            state.value = []
        }
    }
})

export const {addReduxItem, resetArray} = addSlice.actions
export default addSlice.reducer