import React, { use, useState } from "react";
import { TTodo } from "@/types";

import { useAppDispatch } from "@/redux/store";
import { changeComplete } from "@/redux/features/todo/todoSlice";

const Todo = ({ todo }: { todo: TTodo }) => {
  const dispatch = useAppDispatch();
  let checked = todo.isCompleted;

  const handleIsComplete = (e: React.ChangeEvent<HTMLInputElement>) => {
    checked = !checked;
    const completedTodo = { ...todo, isCompleted: checked };

    dispatch(changeComplete(completedTodo));
  };
  console.log("here:::", todo.isCompleted);

  return (
    <div className="flex justify-between items-center p-2 w-full bg-purple-500 rounded-md text-white ">
      <h2 className={todo.isCompleted ? "text-red-500" : ""}>{todo.todo}</h2>
      <div className="flex items-center gap-2">
        <button>edit</button>
        <button>delete</button>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={handleIsComplete}
        />
      </div>
    </div>
  );
};

export default Todo;
