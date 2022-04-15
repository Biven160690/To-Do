import { useState } from 'react';

import { TaskAddFormContainer } from '../form/TaskAddFormContainer';
import { TaskActiveContainer } from './taskActive/TaskActiveContainer';
import { TaskCompletedContainer } from './taskCompleted/TaskCompletedContainer';

import { Tasks } from './types';
import { getActiveTasks, getCompletedTasks } from '../../helpers/getTasks';
import { data } from '../../data';

import './taskManagement.scss';

export function TaskManagement() {
  const [tasks] = useState<Tasks[]>(data);

  const activeTasks: Tasks[] = getActiveTasks(tasks);

  const completedTasks: Tasks[] = getCompletedTasks(tasks);

  return (
    <div className='task-management'>
      <div className='task-management__task-active'>
        <TaskAddFormContainer />
        <div className='task-management__box'>
          <p className='task-management__total'> Total: {tasks.length} </p>
        </div>
        <TaskActiveContainer activeTasks={activeTasks} />
      </div>
      <div className='task-management__task-completed'>
        <TaskCompletedContainer completedTasks={completedTasks} />
      </div>
    </div>
  );
}
