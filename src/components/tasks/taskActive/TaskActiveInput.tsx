interface InputsProps {
  completeTask: () => void;
}

export function TaskActiveInput({ completeTask }: InputsProps) {
  return (
    <input
      type='checkbox'
      className='task-active__checkbox'
      onChange={completeTask}
    />
  );
}
