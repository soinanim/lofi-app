import React from "react";
import Board from "@asseinfo/react-kanban";
import "./TodoWidget.scss";
import Draggable from "react-draggable";

const TodoWidget = () => {
  const board = {
    columns: [
      {
        id: 1,
        title: "Backlog",
        cards: [
          {
            id: 1,
            title: "Add card",
            description: "Add capability to add a card in a column",
          },
        ],
      },
      {
        id: 2,
        title: "Doing",
        cards: [
          {
            id: 2,
            title: "Drag-n-drop support",
            description: "Move a card between the columns",
          },
        ],
      },
    ],
  };

  return (
    <Draggable>
      <Board initialBoard={board}> </Board>
    </Draggable>
  );
};

export default TodoWidget;
