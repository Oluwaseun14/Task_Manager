import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className='my-6 border-2 border-grey-400 w-[95%] h-[40px]'>
      <input 
      className='h-full p-2 w-[80%]'
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit" className='bg-green-600 text-white border-none h-full p-2 rounded-md w-[54px]'>Add Task</button>
    </form>
  );
};

export default TaskForm;
