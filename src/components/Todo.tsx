"use client";
import React, { use, useRef, useState } from "react";
import { TTodo } from "@/types";

import { useAppDispatch } from "@/redux/store";
import { deleteTodo, updateTodo } from "@/redux/features/todo/todoApi";

import { BiEdit } from "react-icons/bi";
import { BsArrowRightCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const Todo = ({ todo }: { todo: TTodo }) => {
  const dispatch = useAppDispatch();
  let checked = todo.completed;

  const [isEditing, setIsEditing] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  const handleIsComplete = () => {
    checked = !checked;
    const completedTodo = { ...todo, completed: checked };
    dispatch(updateTodo(completedTodo));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEditTodo = () => {
    setIsEditing(true);
  };

  const submitEditTodo = () => {
    const updatedTodo = { ...todo, title: input.current?.value };
    dispatch(updateTodo(updatedTodo));
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center gap-2 p-4 w-full break-words bg-purple-500 rounded-md text-white font-medium">
      <div className="flex gap-3 items-center break-words w-full">
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={handleIsComplete}
          className="cursor-pointer w-5 h-5"
        />

        {isEditing ? (
          <input
            ref={input}
            type="text"
            className="text-black px-2 w-full focus:outline-none"
            defaultValue={todo.title}
          />
        ) : (
          <h2
            className={`${
              todo.completed && "line-through"
            } w-full text-xl break-all`}
          >
            {todo.title}
          </h2>
        )}
      </div>
      <div className="flex items-center gap-2 text-2xl">
        {isEditing ? (
          <button onClick={submitEditTodo}>
            <BsArrowRightCircle />
          </button>
        ) : (
          <button onClick={handleEditTodo}>
            <BiEdit />
          </button>
        )}

        <button onClick={handleDeleteTodo} className="text-red-400">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Todo;
