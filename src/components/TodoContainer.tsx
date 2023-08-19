"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/store";

import Todo from "./Todo";
import { getTodos } from "@/redux/features/todo/todoApi";
import FilterTabs from "./FilterTabs";

const TodoContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="h-full w-full flex flex-col gap-4 ">
      <FilterTabs />
      <FilteredTodos />
    </div>
  );
};

const FilteredTodos = () => {
  const { todos, activeFilter } = useSelector((state: any) => state.todoSlice);
  const filteredTodo = todos.filter((todo: any) => {
    if (activeFilter === "all") {
      return todo;
    } else if (activeFilter === "active") {
      return !todo.completed;
    } else if (activeFilter === "completed") {
      return todo.completed;
    }
  });
  return (
    <div className="h-full w-full flex flex-col gap-4 ">
      {filteredTodo.map((todo: any) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoContainer;
