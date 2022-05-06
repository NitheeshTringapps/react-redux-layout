import { configureStore } from "@reduxjs/toolkit";
import menuReducer from '../slices/menuSlice'
import nameReducer from '../slices/nameSlice'
import addressReducer from '../slices/addressSlice'

export default configureStore({
    reducer: {
        menu: menuReducer,
        name: nameReducer,
        address: addressReducer
    }
})