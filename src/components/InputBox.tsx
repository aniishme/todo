"use client";
import React from "react";

import { RiAddFill } from "react-icons/ri";

const InputBox = () => {
  const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <form
      onSubmit={handleTodoSubmit}
      className="w-full flex items-center justify-between gap-4 h-12"
    >
      <input
        type="text"
        className=" px-4 py-3 w-11/12  text-sm text-gray-900 bg-gray-50 rounded-md border focus:outline-none border-gray-300 "
        placeholder="Add a todo..."
      />
      <button type="submit" className="h-full w-14 bg-purple-400 rounded-md">
        <RiAddFill className="h-full w-full text-white" />
      </button>
    </form>
  );
};

export default InputBox;
