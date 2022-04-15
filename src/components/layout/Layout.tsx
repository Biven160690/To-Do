import React from 'react';
import { Navbar } from '../blocks/navBar/NavBar';
import { SideBar } from '../blocks/sideBar/SideBar';

import './layout.scss';
interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <Navbar />
      <SideBar />
      <div className='children'>{children}</div>
    </React.Fragment>
  );
}
