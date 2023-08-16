import { combineReducers } from "@reduxjs/toolkit";

import todoSlice from "./features/todo/todoSlice";

const rootReducer = combineReducers({
  todoSlice: todoSlice,
});

export default rootReducer;
