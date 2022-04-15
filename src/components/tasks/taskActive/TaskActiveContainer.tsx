import React from 'react';

import { TaskActive } from './TaskActive';

import './taskActive.scss';

export function TaskActiveContainer() {
  return (
    <React.Fragment>
      <h3 className='task-active__total'> To do (3) </h3>
      <TaskActive />
    </React.Fragment>
  );
}
