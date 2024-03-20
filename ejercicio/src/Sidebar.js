import React from 'react';

function Sidebar() {
	const sidebarStyles = {
		width: '30%',
		height: '100vh',
		backgroundColor: '#f0f0f0',
		float: 'left',
		padding: '20px',
		boxSizing: 'border-box',
		border: '2px solid black', 
	};

	return (
		<div style={sidebarStyles}>
		<h2>Sidebar</h2>
		</div>
	);
}

export default Sidebar;

