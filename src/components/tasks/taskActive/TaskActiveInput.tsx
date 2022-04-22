interface InputsProps {
  completeTask: () => void;
}

export function TaskActiveInput({ completeTask }: InputsProps) {
  return (
    <input type='checkbox' className='task__checkbox' onChange={completeTask} />
  );
}
