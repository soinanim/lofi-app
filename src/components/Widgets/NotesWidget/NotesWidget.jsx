import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import './NotesWidget.scss';
import { LineOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Input, List } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const NotesWidget = ({ widgetHandler }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [counter, setCounter] = useState(0);
  const [counterFlag, setCounterFlag] = useState(0);
  const [tasks, setTasks] = useState([]);

  const allTasks = JSON.parse(localStorage.getItem('tasks'));

  useEffect(() => {
    if (!allTasks) {
      localStorage.setItem('tasks', JSON.stringify([]));
    } else {
      setTasks(JSON.parse(localStorage.getItem('tasks')));
    }
  }, [counter, counterFlag]);

  function deleteTask(id) {
    const index = tasks.findIndex((item) => item.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      setCounter((counter) => counter - 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  function checkTask(id) {
    const index = tasks.findIndex((item) => item.id === id);
    if (index !== -1) {
      tasks[index].checked = !tasks[index].checked;
      setCounterFlag((counterFlag) => counterFlag + 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  function addTask() {
    setCounter((counter) => counter + 1);
    if (title.length && description.length) {
      let task = {};
      task.id = counter;
      task.title = title;
      task.description = description;
      task.checked = false;
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      setTitle('');
      setDescription('');
    }
  }

  return (
    <Draggable>
      <div className='notes'>
        <div className='row'>
          <h2>Notes</h2>
          <LineOutlined
            className='close'
            onClick={() => widgetHandler('notes')}
          />
        </div>
        {/* <div className='list'> */}
        <List
          itemLayout='horizontal'
          dataSource={tasks}
          locale={{ emptyText: 'No tasks yet' }}
          renderItem={(item, index) => (
            <List.Item
              className={item.checked && 'checked'}
              onClick={() => checkTask(item.id)}>
              <List.Item.Meta
                title={item.title}
                description={<p>{item.description}</p>}
              />
              <CloseOutlined
                className='closeItem'
                onClick={() => deleteTask(item.id)}
              />
            </List.Item>
          )}
        />
        {/* </div> */}
        <div className='buttons'>
          <Input
            placeholder='Enter the title of your task'
            allowClear
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder='Enter a description of your task'
            allowClear
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button
            ghost
            type='button'
            onClick={addTask}
            style={{ color: '#fff' }}>
            Create task
          </Button>
        </div>
      </div>
    </Draggable>
  );
};

export default NotesWidget;
