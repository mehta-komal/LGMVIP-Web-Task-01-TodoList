import React, { useState } from 'react';

const Todolist = () => {
  const [task, setTask] = useState('');
  const [addTask, setAddTask] = useState([]);
  const [taskCompleted, setTaskCompleted] = useState(false);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
    console.log(e.target.value);
  };

  const submitTask = () => {
    setAddTask([...addTask, { task, id: addTask.length }]);
    setTask('');
  };

  const handleTaskCompleted = () => {
    setTaskCompleted(true);
    console.log('1', taskCompleted);
  };

  const handleRemoveTask = (id) => {
    const updatedTask = addTask.filter((task) => task.id !== id);
    setAddTask(updatedTask);
  };

  return (
    <div>
      <input
        type='text'
        value={task}
        name='text'
        onChange={handleTaskChange}
        placeholder='Add Task'
      />
      <button onClick={submitTask}>Add Task</button>
      <div>
        {addTask.map((task) => (
          <div key={task.id}>
            <input
              type='checkbox'
              value={taskCompleted}
              onChange={handleTaskCompleted}
            />
            <li>{task.task}</li>
            <div>
              <button onClick={() => handleRemoveTask(task.id)}>
                Remove Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
