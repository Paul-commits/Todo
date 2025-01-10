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
            const index = action.payload; 
            if (index !== undefined && index >= 0 && index < state.todo.length) {
              state.todo.splice(index, 1);
            }
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer