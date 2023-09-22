import React from 'react';
import TopNavigation from './TopNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <TopNavigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
