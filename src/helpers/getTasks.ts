import { Tasks } from '../components/tasks/types';

type GetTasks = (data: Tasks[]) => Tasks[];

const getActiveTasks: GetTasks = (data) => {
  return data.filter((task) => !task.completed);
};

const getCompletedTasks: GetTasks = (data) => {
  return data.filter((task) => task.completed);
};

export { getActiveTasks, getCompletedTasks };
