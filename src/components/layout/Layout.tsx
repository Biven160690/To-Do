import React from 'react';
import { Navbar } from '../blocks/navBar/NavBar';
import { SideBar } from '../blocks/sideBar/SideBar';
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
