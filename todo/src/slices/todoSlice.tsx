import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {todo, todoSliceType } from "../types/interface";

const initialState:todoSliceType = {
    todo:[]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo :(state, action: PayloadAction<todo>) => {  
            state.todo.push(action.payload);
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            const filteredTodo = state.todo.filter((item) => item.id !== action.payload);
            state.todo = filteredTodo;
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer