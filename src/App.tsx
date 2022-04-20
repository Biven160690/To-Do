import { Layout } from './components/layout/Layout';
import { TaskManagement } from './containers/TaskManagement';

export function App() {
  return (
    <Layout>
      <TaskManagement />
    </Layout>
  );
}
