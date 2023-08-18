"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/store";

import Todo from "./Todo";
import { getTodos } from "@/redux/features/todo/todoApi";

const TodoContainer = () => {
  const dispatch = useAppDispatch();
  const { todos } = useSelector((state: any) => state.todoSlice);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  console.log(todos);

  return (
    <div className="h-96 w-full flex flex-col gap-4">
      {todos.map((todo: any) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoContainer;
