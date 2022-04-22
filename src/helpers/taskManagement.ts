import { Tasks } from '../components/tasks/types';

type GetTasks = (data: Tasks[]) => Tasks[];
type UpdateTask = (id: number, tasks: Tasks[]) => Tasks[];
type EditTaskProps = (
  tasks: Tasks[],
  editID: number | null,
  selectedTask: string
) => Tasks[];

const updateTask: UpdateTask = (id, tasks) => {
  return tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
};

const getActiveTasks: GetTasks = (data) =>
  data.filter((task) => !task.completed);

const getCompletedTasks: GetTasks = (data) =>
  data.filter((task) => task.completed);

const removeSelectedTask: UpdateTask = (id, tasks) => {
  const data = [...tasks];
  return data.filter((task) => task.id !== id);
};

const completeSelectedTask: UpdateTask = (id, tasks) => updateTask(id, tasks);

const returnSelectedTask = (id: number, tasks: Tasks[]) => {
  const data = [...tasks];
  const returningTask = data.filter((task) => task.id === id);
  return [...removeSelectedTask(id, tasks), ...updateTask(id, returningTask)];
};

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

const checkCurrentId =
  (editId: number | null, currentId: number) => (): boolean =>
    editId !== currentId;

const checkEditId = (editId: number | null): boolean => !editId;

export {
  getActiveTasks,
  getCompletedTasks,
  removeSelectedTask,
  completeSelectedTask,
  returnSelectedTask,
  editSelectedTask,
  createTask,
  checkCurrentId,
  checkEditId,
};
