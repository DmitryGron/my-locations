import React from 'react';
import Navbar from '../components/Navbar/Navbar.container';

const Layout = props => {
	console.log(props);
	return (
		<>
			{/* TODO: toolbar */}
			<main>{props.children}</main>
			<Navbar />
		</>
	);
};

export default Layout;
