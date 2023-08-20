import React from "react";
import { AppDispatch, useAppDispatch } from "@/redux/store";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { TTodo } from "@/types";
import { sortDraggedTodos } from "@/redux/features/todo/todoSlice";
import Todo from "../Todo";

const DragAndDrop = ({ items }: { items: TTodo[] }) => {
  const dispatch = useAppDispatch();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      // Press delay of 250ms, with tolerance of 5px of movement
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(e) => handleDragEnd(e, items, dispatch)}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((item) => (
          <Todo key={item.id} id={item.id} todo={item} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default DragAndDrop;

function handleDragEnd(event: any, items: TTodo[], dispatch: AppDispatch) {
  const { active, over } = event;
  console.log(active);
  console.log(over);

  if (active.id !== over.id) {
    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);
    console.log(oldIndex, newIndex);

    const sortedItem = arrayMove(items, oldIndex, newIndex);
    console.log("here", sortedItem);
    dispatch(sortDraggedTodos(sortedItem));
  }
}
