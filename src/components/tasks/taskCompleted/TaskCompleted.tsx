import { TaskBox } from '../TaskBox';
import { TaskCompletedActions } from './TaskCompletedActions';
import { TaskContent } from '../TaskContent';

import { Tasks } from '../types';
import { useState } from 'react';

interface TaskCompletedProps {
  task: Tasks;
  styles: {
    box: string;
    content: string;
  };
  deleteCompletedTask: (id: number) => () => void;
  returnTask: (
    callback: React.Dispatch<React.SetStateAction<boolean>>,
    id: number
  ) => () => void;
}

export function TaskCompleted({
  task,
  styles,
  deleteCompletedTask,
  returnTask,
}: TaskCompletedProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(true);

  const { box, content } = styles;

  return (
    <TaskBox styles={box}>
      <TaskContent
        title={task.title}
        styles={content}
        isCompleted={task.completed}
      />
      <TaskCompletedActions
        isCompleted={isCompleted}
        deleteCompletedTask={deleteCompletedTask(task.id)}
        returnTask={returnTask(setIsCompleted, task.id)}
      />
    </TaskBox>
  );
}
