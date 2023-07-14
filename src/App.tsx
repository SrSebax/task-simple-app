import './App.css';
import { useState } from 'react';
import logo from './logo.svg'
import { ITask } from './interface/ITask';
import { TaskList } from "./components/TaskList";
import { TaskForm } from './components/TaskForm';

interface Props {
  title?: string;
}

export function App({ title }: Props) {

  const [tasks, setTasks] = useState<ITask[]>([])

  const getCurrentTimestamp = (): number => new Date().getTime();

  const newAddTask = (task: ITask) => setTasks([...tasks, { ...task, id: getCurrentTimestamp(), completed: false }]);

  const deleteTask = (id: number) => setTasks(tasks.filter(task => task.id !== id));

  return (
    <div className="bg-dark" style={{ height: '100vh' }}>
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container>'>
          <a href="/" className='navbar-brand'>
            <img src={logo} alt="React Logo" style={{ width: '3rem' }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">

        <div className="row">
          <div className="col-md-4">
            <TaskForm onAddTask={newAddTask} />
          </div>

          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}

