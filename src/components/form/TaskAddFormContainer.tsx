import React, { useEffect, useState } from 'react';
import { createTask, editSelectedTask } from '../../helpers/taskManagement';
import { Tasks } from '../tasks/types';
import { TaskAddForm } from './TaskAddForm';

interface TaskAddProps {
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

export function TaskAddFormContainer({
  taskManagement,
  editTask,
}: TaskAddProps) {
  const [isAdd, setIsAdd] = useState<boolean>(true);

  const { tasks, setTasks } = taskManagement;

  const { editID, selectedTask, setSelectedTask, setEditID } = editTask;

  const editCompletedTask = () => {
    const data = editSelectedTask(tasks, editID, selectedTask);
    setTasks(data);
  };

  useEffect(() => {
    editID ? setIsAdd(false) : setIsAdd(true);
  }, [editID]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isAdd) {
      const newItem = createTask(selectedTask);
      setTasks([...tasks, newItem]);
      setSelectedTask('');
    } else {
      editCompletedTask();
      setSelectedTask('');
      setIsAdd(true);
      setEditID(null);
    }
  };

  const getInputData = (event: React.FormEvent<HTMLInputElement>) => {
    const taskTitle = (event.target as HTMLInputElement).value;
    setSelectedTask(taskTitle);
  };

  return (
    <TaskAddForm
      isAdd={isAdd}
      handleSubmit={onSubmit}
      title={selectedTask}
      getInputData={getInputData}
    />
  );
}
