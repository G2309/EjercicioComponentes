import React from 'react';

function Card() {
  const cardStyle = {
    width: '30%',
    border: '1px solid black', 
    padding: '10px',
  };

  return (
    <div style={cardStyle}>
      <p>Nombre:</p>
      <p>Descripcion:</p>
    </div>
  );
}

export default Card;

