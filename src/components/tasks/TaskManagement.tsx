import { TaskAddFormContainer } from '../form/TaskAddFormContainer';
import { TaskActiveContainer } from './taskActive/TaskActiveContainer';
import { TaskCompletedContainer } from './taskCompleted/TaskCompletedContainer';

import './taskManagement.scss';

export function TaskManagement() {
  return (
    <div className='task-management'>
      <div className='task-management__task-active'>
        <TaskAddFormContainer />
        <div className='task-management__box'>
          <p className='task-management__total'> Total: </p>
        </div>
        <TaskActiveContainer />
      </div>
      <div className='task-management__task-completed'>
        <TaskCompletedContainer />
      </div>
    </div>
  );
}
