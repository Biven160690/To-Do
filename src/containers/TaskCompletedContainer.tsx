import React from 'react';

import { TaskCompleted } from '../components/tasks';

import { ReturnTaskProps, Tasks } from '../components/tasks/types';
import { completedTaskStyles } from '../helpers/styles';

import '../components/tasks/taskCompleted/taskCompleted.scss';

import {
  getCompletedTasks,
  removeSelectedTask,
  returnSelectedTask,
} from '../helpers/taskManagement';

interface TaskCompletedProps {
  taskManagement: {
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  };
}

export function TaskCompletedContainer({ taskManagement }: TaskCompletedProps) {
  const { tasks, setTasks } = taskManagement;

  const completedTasks: Tasks[] = getCompletedTasks(tasks);

  const deleteCompletedTask = (id: number) => () =>
    setTasks(removeSelectedTask(id, tasks));

  const returnTask: ReturnTaskProps = (id) => () => {
    setTasks(returnSelectedTask(id, tasks));
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
