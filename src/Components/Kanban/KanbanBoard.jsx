import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Column from "./Column";
import styles from "./KanbanBoard.module.css";

const initialData = {
  columns: {
    draft: {
      name: "Draft",
      items: [
        {
          id: "1",
          title: "CEO/Founder",
          status: "New",
          cart: 0,
          network: 0,
          avatar: "path/to/avatar1.png",
        },
        {
          id: "2",
          title: "Sales Executive",
          status: "Win",
          cart: 4,
          network: 3,
          avatar: "path/to/avatar2.png",
        },
        {
          id: "3",
          title: "Sales Manager",
          status: "On Hold",
          cart: 2,
          network: 2,
          avatar: "path/to/avatar3.png",
        },
      ],
    },
    sent: {
      name: "Sent",
      items: [
        {
          id: "4",
          title: "Project Manager",
          status: "Win",
          cart: 2,
          network: 3,
          avatar: "path/to/avatar4.png",
        },
        {
          id: "5",
          title: "Marketing Director",
          status: "Pending",
          cart: 3,
          network: 2,
          avatar: "path/to/avatar5.png",
        },
      ],
    },
    open: {
      name: "Open",
      items: [
        {
          id: "6",
          title: "Sales Manager",
          status: "Open",
          cart: 0,
          network: 0,
          avatar: "path/to/avatar6.png",
        },
        {
          id: "7",
          title: "Business Development Manager",
          status: "Loss",
          cart: 0,
          network: 0,
          avatar: "path/to/avatar7.png",
        },
      ],
    },
    Revised: {
      name: "Revised",
      items: [
        {
          id: "8",
          title: "Sales Manager",
          status: "Open",
          cart: 0,
          network: 0,
          avatar: "path/to/avatar6.png",
        },
        {
          id: "9",
          title: "Business Development Manager",
          status: "Loss",
          cart: 0,
          network: 0,
          avatar: "path/to/avatar7.png",
        },
      ],
    },
    Declined: {
      name: "Declined",
      items: [
        {
          id: "10",
          title: "Sales Manager",
          status: "Open",
          cart: 0,
          network: 0,
          avatar: "path/to/avatar6.png",
        },
        {
          id: "11",
          title: "Business Development Manager",
          status: "New",
          cart: 0,
          network: 0,
          avatar: "path/to/avatar7.png",
        },
      ],
    },
  },
};

const KanbanBoard = () => {
  // useEffect(()=>{
  //   console.log(data);
  // },[])
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    if (source.droppableId === destination.droppableId) {
      const column = data.columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setData({
        ...data,
        columns: {
          ...data.columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems,
          },
        },
      });
    } else {
      const sourceColumn = data.columns[source.droppableId];
      const destColumn = data.columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setData({
        ...data,
        columns: {
          ...data.columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems,
          },
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.kanban}>
        {Object.entries(data.columns).map(([columnId, column]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided) => (
              <div className={styles.column} {...provided.droppableProps} ref={provided.innerRef}>
                <h2>{column.name}</h2>
                {column.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={styles.task}
                      >
                        <Column item={item} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
