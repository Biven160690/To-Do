import './taskActive/taskActive.scss';

interface TaskContentProps {
  text: string;
}

export function TaskContent({ text }: TaskContentProps) {
  return <div className='task-active__content'> {text} </div>;
}
