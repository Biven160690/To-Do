import { TaskBox } from '../TaskBox';
import { TaskCompletedActions } from './TaskCompletedActions';
import { TaskContent } from '../TaskContent';

import { Tasks } from '../types';

interface TaskCompletedProps {
  task: Tasks;
  styles: {
    box: string;
    content: string;
  };
}

export function TaskCompleted({ task, styles }: TaskCompletedProps) {
  const { box, content } = styles;

  return (
    <TaskBox styles={box}>
      <TaskContent
        title={task.title}
        styles={content}
        isCompleted={task.completed}
      />
      <TaskCompletedActions isCompleted={task.completed} />
    </TaskBox>
  );
}
