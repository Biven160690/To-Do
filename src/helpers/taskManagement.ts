import { Tasks } from '../components/tasks/types';

type GetTasks = (data: Tasks[]) => Tasks[];
type UpdateTask = (id: number, tasks: Tasks[]) => Tasks[];
type EditTaskProps = (
  tasks: Tasks[],
  editID: number | null,
  selectedTask: string
) => Tasks[];

const updateTaskList: UpdateTask = (id, tasks) => {
  const data = [...tasks];
  const index = data.findIndex((task) => task.id === id);
  data[index].completed = !data[index].completed;
  return data;
};

const getActiveTasks: GetTasks = (data) =>
  data.filter((task) => !task.completed);

const getCompletedTasks: GetTasks = (data) =>
  data.filter((task) => task.completed);

const removeSelectedTask: UpdateTask = (id, tasks) => {
  const data = [...tasks];
  return data.filter((task) => task.id !== id);
};

const completeSelectedTask: UpdateTask = (id, tasks) =>
  updateTaskList(id, tasks);

const returnSelectedTask: UpdateTask = (id, tasks) => updateTaskList(id, tasks);

const editSelectedTask: EditTaskProps = (tasks, editID, selectedTask) => {
  return tasks.map((task) => {
    if (task.id === editID) {
      return { ...task, title: selectedTask };
    }
    return task;
  });
};

const createTask = (selectedTask: string) => {
  return { id: Date.now(), completed: false, title: selectedTask };
};

const checkCurrentId = (editId: number | null, currentId: number) => () =>
  editId !== currentId;

export {
  getActiveTasks,
  getCompletedTasks,
  removeSelectedTask,
  completeSelectedTask,
  returnSelectedTask,
  editSelectedTask,
  createTask,
  checkCurrentId,
};
