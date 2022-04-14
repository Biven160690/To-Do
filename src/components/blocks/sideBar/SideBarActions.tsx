import { FaTasks } from 'react-icons/fa';

import './sidebar.scss';

export function SideBarActions() {
  return (
    <div className='sidebar-actions'>
      <FaTasks className='sidebar-actions__menu' />
    </div>
  );
}
