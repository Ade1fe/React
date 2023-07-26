import React from 'react';

const Header = ({ first, second, headerClassName,pClassName }) => {
  return (
    <div>
      <h1 className={headerClassName}>{first}</h1>
      <p pClassName={pClassName}>{second}</p>
    </div>
  );
};

export default Header;
