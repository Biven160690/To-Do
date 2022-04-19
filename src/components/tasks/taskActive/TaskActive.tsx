import { TaskBox } from '../TaskBox';
import { TaskActiveActions } from './TaskActiveActions';
import { TaskContent } from '../TaskContent';

import { Tasks } from '../types';
import { useEffect, useState } from 'react';

interface TaskActiveProps {
  task: Tasks;
  styles: {
    box: string;
    content: string;
  };
  completeTask: (id: number) => () => void;
  deleteTask: (id: number) => () => void;
  getCurrencyTask: (
    fn: React.Dispatch<React.SetStateAction<boolean>>,
    task: Tasks
  ) => () => void;
  editID: number | null;
}

export function TaskActive({
  task,
  styles,
  editID,
  deleteTask,
  completeTask,
  getCurrencyTask,
}: TaskActiveProps) {
  const [isEdit, setIsEdit] = useState<boolean>(true);

  useEffect(() => {
    editID !== task.id && setIsEdit(true);
  }, [editID, task.id, isEdit]);

  const { box, content } = styles;

  return (
    <TaskBox styles={box}>
      <TaskContent title={task.title} styles={content} />
      <TaskActiveActions
        completeTask={completeTask(task.id)}
        deleteTask={deleteTask(task.id)}
        isEdit={isEdit}
        getCurrencyTask={getCurrencyTask(setIsEdit, task)}
      />
    </TaskBox>
  );
}
