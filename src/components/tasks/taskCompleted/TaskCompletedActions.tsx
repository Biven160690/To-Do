import { RiDeleteBin6Line } from 'react-icons/ri';

import './taskCompleted.scss';
interface TaskCompletedProps {
  isCompleted: boolean;
}

export function TaskCompletedActions({ isCompleted }: TaskCompletedProps) {
  return (
    <div className='task-active__actions'>
      <input
        type='checkbox'
        className='task-active__checkbox'
        checked={isCompleted}
      />
      <div className='task-active__buttons'>
        <button type='button'>
          <RiDeleteBin6Line className='task-active__iconDelete' />
        </button>
      </div>
    </div>
  );
}
