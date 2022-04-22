import React, { useEffect, useState } from 'react';

import { TaskAddForm } from '../components/form/TaskAddForm';

import { EditTask, SetDefaultDataProps, TaskManagement } from './types';
import {
  checkEditId,
  createTask,
  editSelectedTask,
} from '../helpers/taskManagement';

import '../components/form/addForm.scss';

interface TaskAddProps {
  taskManagement: TaskManagement;
  editTask: EditTask;
  setDefaultData: SetDefaultDataProps;
}

export function TaskAddFormContainer({
  taskManagement,
  editTask,
  setDefaultData,
}: TaskAddProps) {
  const [isAdding, setIsAdding] = useState<boolean>(true);

  const { tasks, setTasks } = taskManagement;
  const { editID, selectedTask, setSelectedTask } = editTask;

  useEffect(() => {
    setIsAdding(checkEditId(editID));
  }, [editID]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isAdding) {
      setTasks([...tasks, createTask(selectedTask)]);
      setDefaultData('', null);
    } else {
      setTasks(editSelectedTask(tasks, editID, selectedTask));
      setDefaultData('', null);
      setIsAdding(true);
    }
  };

  const getInputData = (event: React.FormEvent<HTMLInputElement>) => {
    const taskTitle = (event.target as HTMLInputElement).value;
    setSelectedTask(taskTitle);
  };

  return (
    <TaskAddForm
      isAdding={isAdding}
      handleSubmit={onSubmit}
      title={selectedTask}
      getInputData={getInputData}
    />
  );
}
