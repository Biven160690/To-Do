import { useState } from 'react';

import { TaskAddFormContainer } from '../form/TaskAddFormContainer';
import { TaskActiveContainer } from './taskActive/TaskActiveContainer';
import { TaskCompletedContainer } from './taskCompleted/TaskCompletedContainer';

import { Tasks } from './types';
import { data } from '../../data';

import './taskManagement.scss';

export function TaskManagement() {
  const [tasks, setTasks] = useState<Tasks[]>(data);

  const [selectedTask, setSelectedTask] = useState<string>('');

  const [editID, setEditID] = useState<null | number>(null);

  const taskManagement = {
    tasks,
    setTasks,
  };

  const editTask = {
    editID,
    setEditID,
    selectedTask,
    setSelectedTask,
  };

  return (
    <div className='task-management'>
      <div className='task-management__task-active'>
        <TaskAddFormContainer
          taskManagement={taskManagement}
          editTask={editTask}
        />
        <div className='task-management__box'>
          <p className='task-management__total'> Total: {tasks.length} </p>
        </div>
        <TaskActiveContainer
          taskManagement={taskManagement}
          editTask={editTask}
        />
      </div>
      <div className='task-management__task-completed'>
        <TaskCompletedContainer taskManagement={taskManagement} />
      </div>
    </div>
  );
}
