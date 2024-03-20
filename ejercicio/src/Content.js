import React from 'react';
import Card from './Card'
function Content() {
  const contentStyle = {
    height: '100%',
    width: '100%',
    border: '2px solid black',
  };

  return (
    <div style={contentStyle}>
	  <h1>Content</h1>
	  <Card />
    </div>
  );
}

export default Content;

