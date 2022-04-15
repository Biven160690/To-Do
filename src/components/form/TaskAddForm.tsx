import './addForm.scss';

export function TaskAddForm() {
  return (
    <form>
      <div className='addForm'>
        <input
          type='text'
          placeholder='+ Add a task, press Enter to save'
          className='addForm__input'
        />
        <button type='submit' className='addForm__button'>
          Add
        </button>
      </div>
    </form>
  );
}
