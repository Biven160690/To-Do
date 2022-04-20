import { TaskBox } from '../TaskBox';
import { TaskActiveActions } from './TaskActiveActions';

import { SelectedTaskProps, Tasks } from '../types';
import { checkCurrentId } from '../../../helpers/taskManagement';

interface TaskActiveProps {
  task: Tasks;
  styles: {
    box: string;
    content: string;
  };
  editID: number | null;
  completeTask: (id: number) => () => void;
  deleteTask: (id: number) => () => void;
  getSelectedTask: SelectedTaskProps;
}

export function TaskActive({
  task,
  styles,
  editID,
  deleteTask,
  completeTask,
  getSelectedTask,
}: TaskActiveProps) {
  const { box, content } = styles;

  return (
    <TaskBox styles={box}>
      <TaskActiveActions
        styleContent={content}
        title={task.title}
        completeTask={completeTask(task.id)}
        deleteTask={deleteTask(task.id)}
        checkCurrentId={checkCurrentId(editID, task.id)}
        getSelectedTask={getSelectedTask(task)}
      />
    </TaskBox>
  );
}
