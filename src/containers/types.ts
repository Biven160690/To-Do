import { Tasks } from '../components/tasks/types';

export interface TaskManagement {
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

export interface EditTask {
  editID: null | number;
  selectedTask: string;
  setSelectedTask: React.Dispatch<React.SetStateAction<string>>;
  setEditID: React.Dispatch<React.SetStateAction<number | null>>;
}

export type SetDefaultDataProps = (selectedTask: string, id: null) => void;
