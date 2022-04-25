import { NavbarContent } from './NavBarContent';
import { UserProfile } from './UserProfile';

import './navbar.scss';

export function Navbar() {
  return (
    <header className='navbar'>
      <NavbarContent />
      <UserProfile />
    </header>
  );
}
