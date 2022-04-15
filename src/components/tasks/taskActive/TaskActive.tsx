import { TaskBox } from '../TaskBox';
import { TaskActiveActions } from './TaskActiveActions';
import { TaskContent } from '../TaskContent';

import './taskActive.scss';

export function TaskActive() {
  return (
    <TaskBox styles='task-active'>
      <TaskContent text='Add Icon to Dashboard' styles='task-active__content' />
      <TaskActiveActions />
    </TaskBox>
  );
}
