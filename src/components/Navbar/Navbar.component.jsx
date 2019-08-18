import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';

const Navbar = props => (
	<nav>
		<NavigationItems {...props} />
	</nav>
);

export default Navbar;
