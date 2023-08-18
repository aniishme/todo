"use client";
import React from "react";

import { useAppDispatch } from "@/redux/store";

import { RiAddFill } from "react-icons/ri";
import { addTodo } from "@/redux/features/todo/todoApi";

const InputBox = () => {
  const dispatch = useAppDispatch();

  const [todo, setTodo] = React.useState("");

  const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      title: todo,
    };
    dispatch(addTodo(payload));
    setTodo("");
  };

  const handleTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <form
      onSubmit={handleTodoSubmit}
      className="w-full flex items-center justify-between h-12"
    >
      <input
        onChange={handleTodoInputChange}
        name="todo"
        type="text"
        value={todo}
        className=" px-4 py-3 w-11/12 h-full  text-sm text-gray-900 bg-gray-50  border focus:outline-none border-purple-400 "
        placeholder="Add a todo..."
      />
      <button type="submit" className="h-full w-14 bg-purple-400 ">
        <RiAddFill className="h-full w-full text-white" />
      </button>
    </form>
  );
};

export default InputBox;
