import { getTodos, addTodo, deleteTodo, updateTodo } from "./todoApi";
import { TTodo } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IState {
  todos: TTodo[];
  loading: boolean;
  activeFilter: string;
}

const initialState: IState = {
  todos: [],
  loading: false,
  activeFilter: "all",
};

// create a redux slice
export const todoSlice = createSlice({
  name: "extraction",
  initialState,
  reducers: {
    // set active filter
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    sortDraggedTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
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
      state.todos.unshift(action.payload.data);
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

    //Update Todos from API
    builder.addCase(updateTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const filteredTodos = state.todos.filter((item) => {
        return item.id !== action.payload.data.id;
      });
      filteredTodos.unshift(action.payload.data);
      state.todos = filteredTodos;
      state.loading = false;
    });
    builder.addCase(updateTodo.rejected, (state) => {
      state.loading = true;
    });
  },
});

export const { setActiveFilter, sortDraggedTodos } = todoSlice.actions;
export default todoSlice.reducer;
