import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menu1: "Dashboard",
        menu2: "Projects",
        menu3: "Messages",
        menu4: "Members"
    },
    reducers: {

    }
})

export default menuSlice.reducer