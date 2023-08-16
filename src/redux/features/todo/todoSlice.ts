import { TTodo } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  todos: TTodo[];
}

const initialState: IState = {
  todos: [],
};

// create a redux slice
export const todoSlice = createSlice({
  name: "extraction",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<TTodo>) {
      state.todos.push(action.payload);
    },
  },
  extraReducers: () => {},
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
