import React from 'react';

import { TaskActive } from '../components/tasks';

import { SelectedTaskProps, Tasks } from '../components/tasks/types';
import { EditTask, SetDefaultDataProps, TaskManagement } from './types';

import { taskStyles } from '../helpers/styles';
import {
  completeSelectedTask,
  getActiveTasks,
  removeSelectedTask,
} from '../helpers/taskManagement';

interface TaskActiveProps {
  taskManagement: TaskManagement;
  editTask: EditTask;
  setDefaultData: SetDefaultDataProps;
}

export function TaskActiveContainer({
  taskManagement,
  editTask,
  setDefaultData,
}: TaskActiveProps) {
  const { tasks, setTasks } = taskManagement;
  const { editID, setEditID, setSelectedTask } = editTask;

  const activeTasks: Tasks[] = getActiveTasks(tasks);

  const completeTask = (id: number) => () => {
    setTasks(completeSelectedTask(id, tasks));
    editID && setDefaultData('', null);
  };

  const deleteTask = (id: number) => () => {
    setTasks(removeSelectedTask(id, tasks));
    editID && setDefaultData('', null);
  };

  const getSelectedTask: SelectedTaskProps = (task) => (callback) => {
    setSelectedTask(task.title);
    setEditID(task.id);
    callback(false);
  };

  return (
    <section>
      <h3 className='task__total'> To do ({activeTasks.length}) </h3>
      {activeTasks.map((task) => {
        return (
          <TaskActive
            key={task.id}
            task={task}
            styles={taskStyles}
            completeTask={completeTask}
            deleteTask={deleteTask}
            getSelectedTask={getSelectedTask}
            editID={editID}
          />
        );
      })}
    </section>
  );
}
