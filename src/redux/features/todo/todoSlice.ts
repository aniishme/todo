import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// create a redux slice
export const todoSlice = createSlice({
  name: "extraction",
  initialState: {
    loading: false,
    todos: {},
  },
  reducers: {
    addTodo(state, action) {
      state.todos = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
