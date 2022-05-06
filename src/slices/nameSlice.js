import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
    name: 'name',
    initialState: {
        value: "Nitheesh"
    },
    reducers: {
        updateName: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { updateName } = nameSlice.actions;

export default nameSlice.reducer;