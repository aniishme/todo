"use client";
import React from "react";
import InputBox from "./InputBox";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoContainer = () => {
  const { todos } = useSelector((state: any) => state.todoSlice);
  console.log("TODOS:::", todos);
  return (
    <div className="h-96 w-full flex flex-col gap-4">
      {todos.map((todo: any) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoContainer;
