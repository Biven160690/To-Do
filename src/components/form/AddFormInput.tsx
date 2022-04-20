interface FormInputProps {
  title: string;
  getInputData: (event: React.FormEvent<HTMLInputElement>) => void;
}

export function AddFormInput({ title, getInputData }: FormInputProps) {
  return (
    <input
      value={title}
      type='text'
      placeholder='+ Add a task, press Enter to save'
      className='addForm__input'
      onChange={getInputData}
      minLength={3}
      required
      pattern='^\S+(.+\s.+){0,}?\S+$'
      spellCheck={true}
      title='The field is required: min 3 symbols, without start and end space'
    />
  );
}
