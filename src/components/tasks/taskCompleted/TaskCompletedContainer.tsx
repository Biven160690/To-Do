import React from 'react';

import { TaskCompleted } from './TaskCompleted';

import { ReturnTaskProps, Tasks } from '../types';
import { completedTaskStyles } from '../../../helpers/styles';

import './taskCompleted.scss';
import {
  getCompletedTasks,
  removeSelectedTask,
  returnSelectedTask,
} from '../../../helpers/taskManagement';

interface TaskCompletedProps {
  taskManagement: {
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  };
}

export function TaskCompletedContainer({ taskManagement }: TaskCompletedProps) {
  const { tasks, setTasks } = taskManagement;

  const completedTasks: Tasks[] = getCompletedTasks(tasks);

  const deleteCompletedTask = (id: number) => () => {
    const updatedTasks = removeSelectedTask(id, tasks);
    setTasks(updatedTasks);
  };

  const returnTask: ReturnTaskProps = (callback, id) => () => {
    callback(false);
    const updatedTasks = returnSelectedTask(id, tasks);
    setTasks(updatedTasks);
  };

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
            deleteCompletedTask={deleteCompletedTask}
            returnTask={returnTask}
          />
        );
      })}
    </React.Fragment>
  );
}
