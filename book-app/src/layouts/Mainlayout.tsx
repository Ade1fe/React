import React, { ReactNode } from 'react';
import { Navbar } from '../assets';

interface MainlayoutProps {
  children: ReactNode;
}

const Mainlayout: React.FC<MainlayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
}

export default Mainlayout;
