import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css'
const TaskList = ({ tasks, deleteTask, completeTask }) => {
  return (
    <ul className=''>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
