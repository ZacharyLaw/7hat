import React from 'react';
import dynamic from 'next/dynamic';

import {useSortable} from '@dnd-kit/sortable';

import {CSS} from '@dnd-kit/utilities';
import Reorder from "@/components/Reorder";
import Toggle from "@/components/Toggle";
import Category from "@/components/Category";
import Item from "@/components/Item";
import Delete from "@/components/Delete";

const DragHandle = () => {
  return (
    <span className="material-symbols-outlined">
      drag_indicator
    </span>
  );
};

/**
export function SortableItem({ id, children }) {

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <DragHandle />
      {children}
    </div>
  );
};
*/
export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div className="card" ref={setNodeRef} style={style} {...attributes} {...listeners}>
<span className="material-symbols-outlined">
drag_indicator
</span>
        <Toggle />
        <Category />
        <Item />
        <Delete />
            </div>
  );
} 