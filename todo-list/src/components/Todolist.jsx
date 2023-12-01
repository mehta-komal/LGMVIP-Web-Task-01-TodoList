import React, { useState } from 'react';

const Todolist = () => {
  const [task, settask] = useState('');
  const [addTask, setAddTask] = useState([]);
  const [taskCompleted, setTaskCompeletd] = useState(false);
  const handelTask = (e) => {
    e.preventDefault();
    settask(e.target.value);
    console.log(e.target.value);
  };
  const submitTask = () => {
    setAddTask([...addTask, task]);
    // console.log('this is task', task)
  };
  const handelTaskCompleted = () => {
    setTaskCompeletd(true);
    console.log('1', taskCompleted);
  };
  const handelRemoveTask = (id) => {
    const updatedTask = addTask.filter((task) => task.id !== id);
    setAddTask(updatedTask);
  };

  //   console.log("this is addTask", addTask)
  return (
    <div>
      <input
        type='text'
        value={task}
        name='text'
        onChange={handelTask}
        placeholder='Add Task'
      />
      <button onClick={submitTask}>Add Task</button>
      <div>
        {addTask.map((task) => {
          return (
            <>
              <input
                type='checkbox'
                value={taskCompleted}
                onChange={handelTaskCompleted}
              />
              <li key={task.id}>{task}</li>
              <div>
                <button onClick={() => handelRemoveTask(task.id)}>
                  Remove Task
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
