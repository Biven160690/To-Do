import React from 'react';

import { TaskActive } from './TaskActive';

import { CurrencyTaskProps, Tasks } from '../types';
import { activeTaskStyles } from '../../../helpers/styles';

import './taskActive.scss';
import {
  completeSelectedTask,
  getActiveTasks,
  removeSelectedTask,
} from '../../../helpers/taskManagement';

interface TaskActiveProps {
  taskManagement: {
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  };
  editTask: {
    editID: null | number;
    selectedTask: string;
    setSelectedTask: React.Dispatch<React.SetStateAction<string>>;
    setEditID: React.Dispatch<React.SetStateAction<number | null>>;
  };
}

export function TaskActiveContainer({
  taskManagement,
  editTask,
}: TaskActiveProps) {
  const { tasks, setTasks } = taskManagement;

  const activeTasks: Tasks[] = getActiveTasks(tasks);

  const { editID, setEditID, setSelectedTask } = editTask;

  const completeTask = (id: number) => () => {
    const updatedTasks = completeSelectedTask(id, tasks);
    setSelectedTask('');
    setEditID(null);
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => () => {
    const updatedTasks = removeSelectedTask(id, tasks);
    setSelectedTask('');
    setEditID(null);
    setTasks(updatedTasks);
  };

  const getCurrencyTask: CurrencyTaskProps = (callback, task) => () => {
    setSelectedTask(task.title);
    setEditID(task.id);
    callback(false);
  };

  return (
    <React.Fragment>
      <h3 className='task-active__total'> To do ({activeTasks.length}) </h3>
      {activeTasks.map((task) => {
        return (
          <TaskActive
            key={task.id}
            task={task}
            styles={activeTaskStyles}
            completeTask={completeTask}
            deleteTask={deleteTask}
            getCurrencyTask={getCurrencyTask}
            editID={editID}
          />
        );
      })}
    </React.Fragment>
  );
}
