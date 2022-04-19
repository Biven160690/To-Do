import React from 'react';
import './addForm.scss';

interface TaskAddProps {
  isAdd: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  getInputData: (event: React.FormEvent<HTMLInputElement>) => void;
}

export function TaskAddForm({
  isAdd,
  handleSubmit,
  title,
  getInputData,
}: TaskAddProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div className='addForm'>
        <input
          required
          value={title}
          type='text'
          placeholder='+ Add a task, press Enter to save'
          className='addForm__input'
          onChange={getInputData}
        />
        <button type='submit' className='addForm__button'>
          {isAdd ? 'Add' : 'Save'}
        </button>
      </div>
    </form>
  );
}
