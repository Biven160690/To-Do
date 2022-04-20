import { TaskBox } from '../TaskBox';
import { TaskCompletedActions } from './TaskCompletedActions';

import { Tasks } from '../types';

interface TaskCompletedProps {
  task: Tasks;
  styles: {
    box: string;
    content: string;
  };
  deleteCompletedTask: (id: number) => () => void;
  returnTask: (id: number) => () => void;
}

export function TaskCompleted({
  task,
  styles,
  deleteCompletedTask,
  returnTask,
}: TaskCompletedProps) {
  const { box, content } = styles;

  return (
    <TaskBox styles={box}>
      <TaskCompletedActions
        styleContent={content}
        title={task.title}
        isCompleted={task.completed}
        deleteCompletedTask={deleteCompletedTask(task.id)}
        returnTask={returnTask(task.id)}
      />
    </TaskBox>
  );
}
