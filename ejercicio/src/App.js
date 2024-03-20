import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';

function App() {
  const appStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
  };

  const sidebarStyle = {
    width: '30%',
    height: '100%',
    border: '1px solid black',
  };

  const mainContentStyle = {
    width: '70%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={appStyle}>
      <Sidebar style={sidebarStyle} />
      <div style={mainContentStyle}>
        <Header>Header</Header>
        <Content>Content</Content>
      </div>
    </div>
  );
}

export default App;

