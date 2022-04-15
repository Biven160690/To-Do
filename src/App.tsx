import { Layout } from './components/layout/Layout';
import { TaskAddForm } from './components/form/TaskAddForm';
import { TaskActive } from './components/tasks/taskActive/TaskActive';
import { TaskCompleted } from './components/tasks/taskCompleted/TaskCompleted';

export function App() {
  return (
    <Layout>
      <TaskAddForm />
      <TaskActive />
      <TaskCompleted />
    </Layout>
  );
}
