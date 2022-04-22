import { RiDeleteBin6Line } from 'react-icons/ri';

interface CompletedButtonProps {
  deleteCompletedTask: () => void;
}

export function TaskCompletedButton({
  deleteCompletedTask,
}: CompletedButtonProps) {
  return (
    <div className='task__buttons'>
      <button type='button' onClick={deleteCompletedTask}>
        <RiDeleteBin6Line className='task__iconDelete' />
      </button>
    </div>
  );
}
