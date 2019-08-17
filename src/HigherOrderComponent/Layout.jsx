import React from 'react';
import Navbar from '../components/Navbar/Navbar.container';
import Toolbar from '../containers/Toolbar/Toolbar.container';

const Layout = props => {
	console.log(props);
	return (
		<>
			<Toolbar />
			<main>{props.children}</main>
			<Navbar />
		</>
	);
};

export default Layout;
