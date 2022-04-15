import React from 'react';

import { TaskCompleted } from './TaskCompleted';

import './taskCompleted.scss';

export function TaskCompletedContainer() {
  return (
    <React.Fragment>
      <h3 className='task-completed__total'>Completed (4)</h3>
      <TaskCompleted />
    </React.Fragment>
  );
}
