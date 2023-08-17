import { TTodo } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../lib/api";

export const addTodo = createAsyncThunk(
  "addTodo",
  async (data: Partial<TTodo>, { dispatch, rejectWithValue }) => {
    try {
      const res = await api.post("/api/todos", data);
      return res.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTodos = createAsyncThunk(
  "getTodos",
  async (undefined, { dispatch, rejectWithValue }) => {
    try {
      const res = await api.get("/api/todos");
      return res.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "deleteTodo",
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const res = await api.delete(`/api/todos/${id}`);
      return res.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "updateTodo",
  async (data: Partial<TTodo>, { dispatch, rejectWithValue }) => {
    try {
      const res = await api.put(`/api/todos/${data.id}`, {
        title: data.title,
        completed: data.completed,
      });
      return res.data;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
