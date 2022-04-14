import { FaClipboardCheck } from 'react-icons/fa';

import './navbar.scss';

export function NavbarContent() {
  return (
    <div className='navbar-content'>
      <div className='navbar-content__logo'>
        <FaClipboardCheck className='navbar-content__icon' />
        <p className='navbar-content__iconText'>To-Do</p>
      </div>
      <div className='navbar-content__title'>
        <p className='navbar-content__text'>Tasks</p>
      </div>
    </div>
  );
}
