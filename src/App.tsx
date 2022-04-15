import { Layout } from './components/layout/Layout';
import { TaskAddForm } from './components/form/TaskAddForm';
import { TaskActive } from './components/tasks/taskActive/TaskActive';

export function App() {
  return (
    <Layout>
      <TaskAddForm />
      <TaskActive />
    </Layout>
  );
}
