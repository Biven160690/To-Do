import { RiDeleteBin6Line } from 'react-icons/ri';

interface CompletedButtonProps {
  deleteCompletedTask: () => void;
}

export function TaskCompletedButton({
  deleteCompletedTask,
}: CompletedButtonProps) {
  return (
    <div className='task-active__buttons'>
      <button type='button' onClick={deleteCompletedTask}>
        <RiDeleteBin6Line className='task-active__iconDelete' />
      </button>
    </div>
  );
}
