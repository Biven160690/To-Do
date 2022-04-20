import { useState } from 'react';

import { ActiveTasksManagement } from './ActiveTasksManagement';
import { TaskCompletedContainer } from './TaskCompletedContainer';

import { Tasks } from '../components/tasks/types';

import { data } from '../data';

import './taskManagement.scss';

export function TaskManagement() {
  const [tasks, setTasks] = useState<Tasks[]>(data);

  const taskManagement = {
    tasks,
    setTasks,
  };

  return (
    <div className='task-management'>
      <ActiveTasksManagement taskManagement={taskManagement} />
      <div className='task-management__task-completed'>
        <TaskCompletedContainer taskManagement={taskManagement} />
      </div>
    </div>
  );
}
