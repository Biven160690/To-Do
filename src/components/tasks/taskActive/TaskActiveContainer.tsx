import React from 'react';

import { TaskActive } from './TaskActive';

import { Tasks } from '../types';
import { activeTaskStyles } from '../../../helpers/styles';

import './taskActive.scss';
interface TaskActiveProps {
  activeTasks: Tasks[];
}

export function TaskActiveContainer({ activeTasks }: TaskActiveProps) {
  return (
    <React.Fragment>
      <h3 className='task-active__total'> To do ({activeTasks.length}) </h3>
      {activeTasks.map((task) => {
        return (
          <TaskActive task={task} key={task.id} styles={activeTaskStyles} />
        );
      })}
    </React.Fragment>
  );
}
