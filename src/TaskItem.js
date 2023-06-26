import React from 'react';
import { MdCheck } from 'react-icons/md';

const TaskItem = ({ task, deleteTask, completeTask }) => {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleCompleted = () => {
    completeTask(task.id);
  };

  return (
    <li className='flex items-center my-4'>
      <span className={`task ${task.completed ? 'completed' : ''} w-[40%]`}>{task.title}</span>
      {task.completed && <span className="text-green-500"><MdCheck /></span>} {/* Display the check icon if the task is completed */}
      <button onClick={handleDelete} className='mx-4 bg-red-600 p-2 rounded-md text-[12px] w-[25%]'>Delete</button>
      <button onClick={handleCompleted} className='mx-4 bg-green-500 p-2 rounded-md text-[12px] w-[25%]'>Complete</button>
    </li>
  );
};

export default TaskItem;

