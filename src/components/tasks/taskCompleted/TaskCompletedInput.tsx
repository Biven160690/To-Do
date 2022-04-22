interface CompletedInputProps {
  isCompleted: boolean;
  returnTask: () => void;
}

export function TaskCompletedInput({
  isCompleted,
  returnTask,
}: CompletedInputProps) {
  return (
    <input
      type='checkbox'
      className='task__checkbox'
      checked={isCompleted}
      onChange={returnTask}
    />
  );
}
