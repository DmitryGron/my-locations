import React from 'react';
// import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';

const Layout = props => {
	console.log(props);
	return (
		<>
			{/* <Toolbar
					opened={this.sideDrawerOpenedHandler}
					isAuthenticated={this.props.isAuthenticated}
				/> */}
			<main>{props.children}</main>
		</>
	);
};

export default Layout;
