import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface TaskActiveProps {
  completeTask: () => void;
  deleteTask: () => void;
  isEdit: boolean;
  getCurrencyTask: () => void;
}

export function TaskActiveActions({
  completeTask,
  deleteTask,
  isEdit,
  getCurrencyTask,
}: TaskActiveProps) {
  return (
    <div className='task-active__actions'>
      <input
        type='checkbox'
        className='task-active__checkbox'
        onChange={completeTask}
      />
      <div className='task-active__buttons'>
        {isEdit && (
          <button type='button' onClick={getCurrencyTask}>
            <FiEdit className='task-active__iconEdit' />
          </button>
        )}
        <button type='button' onClick={deleteTask}>
          <RiDeleteBin6Line className='task-active__iconDelete' />
        </button>
      </div>
    </div>
  );
}
