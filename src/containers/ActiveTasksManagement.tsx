import { useState } from 'react';

import { TaskActiveContainer } from './TaskActiveContainer';
import { TaskAddFormContainer } from './TaskAddFormContainer';

import { SetDefaultDataProps, TaskManagement } from './types';

interface ActiveTaskProps {
  taskManagement: TaskManagement;
}

export function ActiveTasksManagement({ taskManagement }: ActiveTaskProps) {
  const [selectedTask, setSelectedTask] = useState<string>('');

  const [editID, setEditID] = useState<null | number>(null);

  const { tasks } = taskManagement;

  const editTask = {
    editID,
    setEditID,
    selectedTask,
    setSelectedTask,
  };

  const setDefaultData: SetDefaultDataProps = (selectedTask, id) => {
    setSelectedTask(selectedTask);
    setEditID(id);
  };

  return (
    <div className='task-management__task-active'>
      <TaskAddFormContainer
        taskManagement={taskManagement}
        editTask={editTask}
        setDefaultData={setDefaultData}
      />
      <div className='task-management__box'>
        <p className='task-management__total'> Total: {tasks.length} </p>
      </div>
      <TaskActiveContainer
        taskManagement={taskManagement}
        editTask={editTask}
        setDefaultData={setDefaultData}
      />
    </div>
  );
}
