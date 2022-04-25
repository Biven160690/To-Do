import { TaskCompletedButton } from './TaskCompletedButton';
import { TaskCompletedInput } from './TaskCompletedInput';

import { TaskContent } from '../TaskContent';
interface TaskCompletedProps {
  isCompleted: boolean;
  title: string;
  styleContent: string;
  deleteCompletedTask: () => void;
  returnTask: () => void;
}

export function TaskCompletedActions({
  isCompleted,
  title,
  styleContent,
  deleteCompletedTask,
  returnTask,
}: TaskCompletedProps) {
  return (
    <article className='task__actions'>
      <div className='task__actions__inputBox'>
        <div>
          <TaskCompletedInput
            isCompleted={isCompleted}
            returnTask={returnTask}
          />
        </div>
        <div className='task__actions__contentBox'>
          <TaskContent
            title={title}
            styles={styleContent}
            isCompleted={isCompleted}
          />
        </div>
      </div>
      <div>
        <TaskCompletedButton deleteCompletedTask={deleteCompletedTask} />
      </div>
    </article>
  );
}
