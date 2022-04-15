import { TaskBox } from '../TaskBox';
import { TaskCompletedActions } from './TaskCompletedActions';
import { TaskContent } from '../TaskContent';

import './taskCompleted.scss';

export function TaskCompleted() {
  return (
    <TaskBox styles='task-completed'>
      <TaskContent
        text='Add Icon to Dashboard'
        styles='task-completed__content'
      />
      <TaskCompletedActions />
    </TaskBox>
  );
}
