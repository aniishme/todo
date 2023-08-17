import React, { use, useState } from "react";
import { TTodo } from "@/types";

import { useAppDispatch } from "@/redux/store";

const Todo = ({ todo }: { todo: TTodo }) => {
  const dispatch = useAppDispatch();
  let checked = todo.completed;

  const handleIsComplete = (e: React.ChangeEvent<HTMLInputElement>) => {
    checked = !checked;
    const completedTodo = { ...todo, isCompleted: checked };
  };
  console.log("here:::", todo.completed);

  return (
    <div className="flex justify-between items-center p-2 w-full bg-purple-500 rounded-md text-white ">
      <h2 className={todo.completed ? "text-red-500" : ""}>{todo.title}</h2>
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
