import { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface ActiveButtonsProps {
  checkCurrentId: () => boolean;
  deleteTask: () => void;
  getSelectedTask: (
    callback: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

export function TaskActiveButtons({
  checkCurrentId,
  getSelectedTask,
  deleteTask,
}: ActiveButtonsProps) {
  const [isEditing, setIsEditing] = useState<boolean>(true);

  useEffect(() => {
    checkCurrentId() && setIsEditing(true);
  }, [checkCurrentId]);

  return (
    <div className='task__buttons'>
      {isEditing && (
        <button
          data-testid='edit'
          type='button'
          onClick={() => getSelectedTask(setIsEditing)}>
          <FiEdit className='task__iconEdit' />
        </button>
      )}
      <button data-testid='delete' type='button' onClick={deleteTask}>
        <RiDeleteBin6Line className='task__iconDelete' />
      </button>
    </div>
  );
}
