import { TaskActiveInput } from './TaskActiveInput';
import { TaskActiveButtons } from './TaskActiveButtons';
import { TaskContent } from '../TaskContent';
interface TaskActiveProps {
  title: string;
  styleContent: string;
  completeTask: () => void;
  deleteTask: () => void;
  getSelectedTask: (
    callback: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  checkCurrentId: () => boolean;
}

export function TaskActiveActions({
  styleContent,
  checkCurrentId,
  completeTask,
  deleteTask,
  getSelectedTask,
  title,
}: TaskActiveProps) {
  return (
    <article className='task__actions'>
      <div className='task__actions__inputBox'>
        <div>
          <TaskActiveInput completeTask={completeTask} />
        </div>
        <div className='task__actions__contentBox'>
          <TaskContent title={title} styles={styleContent} />
        </div>
      </div>
      <div>
        <TaskActiveButtons
          checkCurrentId={checkCurrentId}
          deleteTask={deleteTask}
          getSelectedTask={getSelectedTask}
        />
      </div>
    </article>
  );
}
