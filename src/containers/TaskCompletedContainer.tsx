import React from 'react';

import { TaskCompleted } from '../components/tasks';

import { ReturnTaskProps, Tasks } from '../components/tasks/types';
import { taskStyles } from '../helpers/styles';

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
    <section>
      <h3 className='task__total'>Completed ({completedTasks.length})</h3>
      {completedTasks.map((task) => {
        return (
          <TaskCompleted
            task={task}
            key={task.id}
            styles={taskStyles}
            deleteCompletedTask={deleteCompletedTask}
            returnTask={returnTask}
          />
        );
      })}
    </section>
  );
}
