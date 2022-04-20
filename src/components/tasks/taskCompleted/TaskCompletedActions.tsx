import { TaskCompletedButton } from './TaskCompletedButton';
import { TaskCompletedInput } from './TaskCompletedInput';

import './taskCompleted.scss';
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
    <div className='task-completed__actions'>
      <div className='task-completed__actions__inputBox'>
        <div>
          <TaskCompletedInput
            isCompleted={isCompleted}
            returnTask={returnTask}
          />
        </div>
        <div className='task-active__actions__contentBox'>
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
    </div>
  );
}
