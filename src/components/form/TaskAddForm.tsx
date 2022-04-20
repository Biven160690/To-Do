import React from 'react';

import { AddFormButtons } from './AddFormButton';
import { AddFormInput } from './AddFormInput';

interface TaskAddProps {
  isAdding: boolean;
  title: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  getInputData: (event: React.FormEvent<HTMLInputElement>) => void;
}

export function TaskAddForm({
  isAdding,
  title,
  handleSubmit,
  getInputData,
}: TaskAddProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div className='addForm'>
        <AddFormInput title={title} getInputData={getInputData} />
        <AddFormButtons isAdding={isAdding} />
      </div>
    </form>
  );
}
