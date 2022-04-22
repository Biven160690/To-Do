import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TaskActive } from '../taskActive/TaskActive';

describe('TaskAddForm component', () => {
  const task = { id: 1, title: 'delectus aut autem', completed: false };
  const styles = {
    box: 'task',
    content: 'task__content',
  };
  const editID = 1;
  const deleteTask = jest.fn();
  const completeTask = jest.fn();
  const getSelectedTask = jest.fn(() => jest.fn());

  it('render TaskActive component', () => {
    render(
      <TaskActive
        task={task}
        styles={styles}
        completeTask={completeTask}
        deleteTask={deleteTask}
        getSelectedTask={getSelectedTask}
        editID={editID}
      />
    );

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('delectus aut autem')).toBeInTheDocument();
    expect(screen.getByTestId('edit')).toBeInTheDocument();
    expect(screen.getByTestId('delete')).toBeInTheDocument();
  });

  it('user action', () => {
    render(
      <TaskActive
        task={task}
        styles={styles}
        completeTask={completeTask}
        deleteTask={deleteTask}
        getSelectedTask={getSelectedTask}
        editID={editID}
      />
    );
    userEvent.click(screen.getByRole('checkbox'));
    expect(completeTask).toBeCalled();

    userEvent.click(screen.getByTestId('delete'));
    expect(deleteTask).toBeCalled();
  });
});
