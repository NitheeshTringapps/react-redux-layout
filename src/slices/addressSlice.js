import { createSlice } from "@reduxjs/toolkit";

export const addressSlice = createSlice({
    name: 'name',
    initialState: {
        value: "Tringapps Inc, Svalar Square"
    },
    reducers: {
        updateAddress: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { updateAddress } = addressSlice.actions;

export default addressSlice.reducer;