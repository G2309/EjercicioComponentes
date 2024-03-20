import React from 'react';

function Header() {
  const headerStyle = {
    height: '20%',
    width: '100%',
    border: '2px solid black', 
  };

  return (
    <div style={headerStyle}>
      <h1>Header</h1>
    </div>
  );
}

export default Header;

