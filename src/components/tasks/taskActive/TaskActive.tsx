import { TaskBox } from '../TaskBox';
import { TaskActiveActions } from './TaskActiveActions';
import { TaskContent } from '../TaskContent';

import { Tasks } from '../types';

interface TaskActiveProps {
  task: Tasks;
  styles: {
    box: string;
    content: string;
  };
}

export function TaskActive({ task, styles }: TaskActiveProps) {
  const { box, content } = styles;

  return (
    <TaskBox styles={box}>
      <TaskContent title={task.title} styles={content} />
      <TaskActiveActions />
    </TaskBox>
  );
}
