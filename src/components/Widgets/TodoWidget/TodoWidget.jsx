import React from 'react';
import Board from '@asseinfo/react-kanban';
import { LineOutlined } from '@ant-design/icons';

import './TodoWidget.scss';

const TodoWidget = ({ widgetHandler }) => {
  const board = {
    columns: [
      {
        id: 1,
        title: 'Backlog',
        cards: [
          {
            id: 1,
            title: 'Card title 1',
          },
          {
            id: 2,
            title: 'Card title 2',
          },
          {
            id: 3,
            title: 'Card title 3',
          },
        ],
      },
      {
        id: 2,
        title: 'Sprint',
        cards: [
          {
            id: 9,
            title: 'Card title 9',
          },
        ],
      },
      {
        id: 3,
        title: 'In progress',
        cards: [
          {
            id: 10,
            title: 'Card title 10',
          },
          {
            id: 11,
            title: 'Card title 11',
          },
        ],
      },
      {
        id: 4,
        title: 'Done',
        cards: [
          {
            id: 12,
            title: 'Card title 12',
          },
          {
            id: 13,
            title: 'Card title 13',
          },
        ],
      },
    ],
  };

  const ColumnAdder = ({ addColumn }) => {
    return (
      <div
        onClick={() =>
          addColumn({ id: new Date().getTime(), title: 'Title', cards: [] })
        }>
        Add column
      </div>
    );
  };

  function UncontrolledBoard() {
    return (
      <Board
        // allowRenameColumn
        allowRemoveCard
        initialBoard={board}
        allowAddCard={{ on: 'bottom' }}
        onNewCardConfirm={(draftCard) => ({
          id: new Date().getTime(),
          ...draftCard,
        })}
        renderColumnAdder={({ addColumn }) => (
          <ColumnAdder addColumn={addColumn} />
        )}
      />
    );
  }

  return (
    <div className='todo widget'>
      <LineOutlined className='close' onClick={() => widgetHandler('todo')} />
      <UncontrolledBoard />
    </div>
  );
};

export default TodoWidget;
