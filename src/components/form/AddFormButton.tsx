interface FormButtonsProps {
  isAdding: boolean;
}
export function AddFormButtons({ isAdding }: FormButtonsProps) {
  return (
    <button type='submit' className='addForm__button'>
      {isAdding ? 'Add' : 'Save'}
    </button>
  );
}
