import { FaUserCircle } from 'react-icons/fa';
import { GrFormCheckmark } from 'react-icons/gr';

export function UserProfile() {
  return (
    <div className='navbar-userProfile'>
      <p className='navbar-userProfile__userName'>Sergey Mamonko</p>
      <div className='navbar-userProfile__userActions'>
        <FaUserCircle className='navbar-userProfile__userIcon' />
        <GrFormCheckmark />
      </div>
    </div>
  );
}
