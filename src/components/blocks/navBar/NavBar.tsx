import { NavbarContent } from './NavBarContent';
import { UserProfile } from './UserProfile';

import './navbar.scss';

export function Navbar() {
  return (
    <div className='navbar'>
      <NavbarContent />
      <UserProfile />
    </div>
  );
}
