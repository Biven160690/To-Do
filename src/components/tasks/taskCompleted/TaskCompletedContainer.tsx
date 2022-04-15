import React from 'react';

import { TaskCompleted } from './TaskCompleted';

import { Tasks } from '../types';
import { completedTaskStyles } from '../../../helpers/styles';

import './taskCompleted.scss';

interface TaskCompletedProps {
  completedTasks: Tasks[];
}

export function TaskCompletedContainer({ completedTasks }: TaskCompletedProps) {
  return (
    <React.Fragment>
      <h3 className='task-completed__total'>
        Completed ({completedTasks.length})
      </h3>
      {completedTasks.map((task) => {
        return (
          <TaskCompleted
            task={task}
            key={task.id}
            styles={completedTaskStyles}
          />
        );
      })}
    </React.Fragment>
  );
}
