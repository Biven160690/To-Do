import { TaskBox } from '../TaskBox';
import { TaskActiveActions } from './TaskActiveActions';
import { TaskContent } from '../TaskContent';

import './taskActive.scss';

export function TaskActive() {
  return (
    <TaskBox styles='task-active'>
      <TaskContent text='Add Icon to Dashboard' />
      <TaskActiveActions />
    </TaskBox>
  );
}
