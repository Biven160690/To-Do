import React from 'react';

import { Navbar, SideBar } from '../blocks';
interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <Navbar />
      <SideBar />
      {children}
    </React.Fragment>
  );
}
