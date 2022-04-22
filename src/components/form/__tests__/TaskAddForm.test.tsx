import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TaskAddForm } from '../TaskAddForm';

describe('TaskAddForm component', () => {
  const isAdding = true;
  const title = '';
  const onSubmit = jest.fn();
  const getInputData = jest.fn();

  it('render TaskAddForm component', () => {
    render(
      <TaskAddForm
        isAdding={isAdding}
        title={title}
        handleSubmit={onSubmit}
        getInputData={getInputData}
      />
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('+ Add a task, press Enter to save')
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  it('form submit should be successful when input has data', () => {
    render(
      <TaskAddForm
        isAdding={isAdding}
        title={title}
        handleSubmit={onSubmit}
        getInputData={getInputData}
      />
    );

    userEvent.type(screen.getByRole('textbox'), 'Hello');

    expect(getInputData).toHaveBeenCalledTimes(5);
  });

  it('form should be invalid when input empty', () => {
    render(
      <TaskAddForm
        isAdding={isAdding}
        title={title}
        handleSubmit={onSubmit}
        getInputData={getInputData}
      />
    );

    userEvent.click(screen.getByRole('button', { name: /add/i }));

    expect(screen.getByRole('textbox')).toBeInvalid();
  });

  it('form should be invalid when input has spaces', () => {
    render(
      <TaskAddForm
        isAdding={isAdding}
        title={title}
        handleSubmit={onSubmit}
        getInputData={getInputData}
      />
    );
    userEvent.type(screen.getByRole('textbox'), 'Text ');

    userEvent.click(screen.getByRole('button', { name: /add/i }));
    expect(screen.getByRole('textbox')).toBeInvalid();
  });
});
