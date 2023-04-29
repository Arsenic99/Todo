import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../src/assets/styles/app.scss';
import Task from './components/task';
import TaskInput from './components/taskinput';

function App() {
  const [tasks, setTasks] = useState([]);
  const task = useSelector((state) => state.tasks)
  useEffect(() => {
    setTasks(task);
  }, [task])
  console.log(tasks);
  return (
    <div className="App">
      <h1>My Tasks</h1>
      <TaskInput />
      <div className='tasklist'>
        {
          tasks && tasks.map((item) => (
            <Task key={item.id} tasks={item} />
          ))
        }
      </div>

    </div>
  );
}

export default App;
