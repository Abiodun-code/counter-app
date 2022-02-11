import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.css';
import './components/index.css';
import Task from './components/Task';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Doctor Appointment',
        days: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        days: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        days: 'Feb 7th at 2:30pm',
        reminder: false,
    },
])

// Delete
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

// Reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: task.reminder} : task))
}

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 100000) + 1

  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    <div className='container'>
        <Counter />
        <AddTask onAdd={addTask} />
        {tasks.length > 0 ? (<Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Task to display')}
      </div>
  )
};

export default App;
