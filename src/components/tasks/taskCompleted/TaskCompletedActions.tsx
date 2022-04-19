import { RiDeleteBin6Line } from 'react-icons/ri';

import './taskCompleted.scss';
interface TaskCompletedProps {
  isCompleted: boolean;
  deleteCompletedTask: () => void;
  returnTask: () => void;
}

export function TaskCompletedActions({
  isCompleted,
  deleteCompletedTask,
  returnTask,
}: TaskCompletedProps) {
  return (
    <div className='task-active__actions'>
      <input
        type='checkbox'
        className='task-active__checkbox'
        checked={isCompleted}
        onChange={returnTask}
      />
      <div className='task-active__buttons'>
        <button type='button' onClick={deleteCompletedTask}>
          <RiDeleteBin6Line className='task-active__iconDelete' />
        </button>
      </div>
    </div>
  );
}
