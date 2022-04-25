import { SideBarActions } from './SideBarActions';

import './sidebar.scss';

export function SideBar() {
  return (
    <aside className='sidebar'>
      <SideBarActions />
    </aside>
  );
}
