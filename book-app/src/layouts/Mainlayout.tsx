import React, { ReactNode } from 'react';
import { Footer, Navbar } from '../assets';

interface MainlayoutProps {
  children: ReactNode;
}

const Mainlayout: React.FC<MainlayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
}

export default Mainlayout;
