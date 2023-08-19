import React from "react";

import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/store";
import { setActiveFilter } from "@/redux/features/todo/todoSlice";

const tabItems = [
  {
    value: "all",
  },
  {
    value: "active",
  },
  {
    value: "completed",
  },
];

const FilterTabs = () => {
  const dispatch = useAppDispatch();
  const { activeFilter } = useSelector((state: any) => state.todoSlice);
  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setActiveFilter(e.currentTarget.textContent!));
  };

  return (
    <ul className="w-full flex flex-grow-1 items-center justify-evenly flex-wrap text-base  font-medium text-center border-b-2 border-purple-400">
      {tabItems.map((item) => {
        return (
          <li
            className={` flex-1 bg-purple-200 ${
              activeFilter === item.value && "bg-purple-400 text-white"
            }  hover:bg-purple-400 `}
            key={item.value}
          >
            <button
              className="inline-block p-3  rounded-t-lg w-full h-full capitalize  hover:text-white"
              onClick={handleTabClick}
            >
              {item.value}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterTabs;
