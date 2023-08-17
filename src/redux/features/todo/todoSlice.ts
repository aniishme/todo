import { getTodos } from "./todoApi";
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
  },
});

export default todoSlice.reducer;
