import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskDescription, setEditTaskDescription] = useState('');

  const addTask = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (task.trim() !== '') {
      const newTask = { id: Date.now(), description: task, completed: false };
      
      setTasks([...tasks, newTask]);
          setTask('');
    }
  };

  const startEditingTask = (taskId, description) => {
    setEditTaskId(taskId);
    setEditTaskDescription(description);
  };

  const cancelEditingTask = () => {
    setEditTaskId(null);
    setEditTaskDescription('');
  };

  const saveEditedTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, description: editTaskDescription } : task
    );
    setTasks(updatedTasks);
    setEditTaskId(null);
    setEditTaskDescription('');
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div> 
      <h1>Task Manager</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Task description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editTaskDescription}
                  onChange={(e) => setEditTaskDescription(e.target.value)}
                />
                <button onClick={() => saveEditedTask(task.id)}>Save</button>
                <button onClick={cancelEditingTask}>Cancel</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />
                {task.completed ? (
                  <del>{task.description}</del>
                ) : (
                  task.description
                )}
                <button onClick={() => startEditingTask(task.id, task.description)}>
                  Edit
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
