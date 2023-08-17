import { getTodos, addTodo, deleteTodo } from "./todoApi";
import { TTodo } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  todos: TTodo[];
  loading: boolean;
}

const initialState: IState = {
  todos: [],
  loading: false,
};

// create a redux slice
export const todoSlice = createSlice({
  name: "extraction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Fetch Todos from API
    builder.addCase(getTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload.data;
      state.loading = false;
    });
    builder.addCase(getTodos.rejected, (state) => {
      state.loading = false;
    });

    //Add Todos to API
    builder.addCase(addTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload.data);
      state.loading = false;
    });
    builder.addCase(addTodo.rejected, (state) => {
      state.loading = true;
    });

    //Delete Todos from API
    builder.addCase(deleteTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const filteredTodos = state.todos.filter((item) => {
        return item.id !== action.payload.data.id;
      });
      state.todos = filteredTodos;
      state.loading = false;
    });
    builder.addCase(deleteTodo.rejected, (state) => {
      state.loading = true;
    });
  },
});

export default todoSlice.reducer;
