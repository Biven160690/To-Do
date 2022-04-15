import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

import './taskActive.scss';

export function TaskActiveActions() {
  return (
    <div className='task-active__actions'>
      <input
        type='checkbox'
        className='task-active__checkbox'
        checked={false}
      />
      <div className='task-active__buttons'>
        <button type='button'>
          <FiEdit className='task-active__iconEdit' />
        </button>
        <button type='button'>
          <RiDeleteBin6Line className='task-active__iconDelete' />
        </button>
      </div>
    </div>
  );
}
