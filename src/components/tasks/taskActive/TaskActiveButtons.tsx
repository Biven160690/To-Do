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
    <div className='task-active__buttons'>
      {isEditing && (
        <button type='button' onClick={() => getSelectedTask(setIsEditing)}>
          <FiEdit className='task-active__iconEdit' />
        </button>
      )}
      <button type='button' onClick={deleteTask}>
        <RiDeleteBin6Line className='task-active__iconDelete' />
      </button>
    </div>
  );
}
