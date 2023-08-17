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
    changeComplete(state, action: PayloadAction<Partial<TTodo>>) {
      const filterTodo = state.todos.filter((item) => {
        if (item.id !== action.payload.id) {
          return true;
        }
      });
      state.todos = filterTodo;
    },
  },
  extraReducers: () => {},
});

export const { addTodo, changeComplete } = todoSlice.actions;

export default todoSlice.reducer;
