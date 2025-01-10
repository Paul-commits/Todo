import { configureStore } from "@reduxjs/toolkit";
import todoSlice  from "../src/slices/todoSlice"

const Store = configureStore({
    reducer:{
        todo : todoSlice
    }
})


export default Store